import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ROUTE_BY_LEGACY_PATH = {
  '/html/TrangChu.html': '/trang-chu',
  '/html/GioHang.html': '/gio-hang',
  '/html/GioiThieu.html': '/gioi-thieu',
  '/html/LienHe.html': '/lien-he',
  '/html/DangKy.html': '/dang-ky',
  '/html/HoiDap.html': '/hoi-dap',
  '/html/GiaoTra.html': '/giao-tra-hang',
  '/html/ChinhSach.html': '/chinh-sach',
  '/html/SanPham/SanPham_DoBoi.html': '/san-pham/do-boi',
  '/html/SanPham/SanPham_PhuKienBoi.html': '/san-pham/phu-kien-boi',
  '/html/SanPham/SanPham_GiamGia.html': '/san-pham/giam-gia',
  '/html/SanPham/ChiTietSanPham_DoBoi.html': '/chi-tiet/do-boi',
  '/html/SanPham/ChiTietSanPham_PhuKien.html': '/chi-tiet/phu-kien',
  '/html/SanPham/ChiTietSanPham_GiamGia.html': '/chi-tiet/giam-gia',
};

const normalizeToAppPath = (rawUrl, baseUrl) => {
  if (!rawUrl || rawUrl.startsWith('#') || rawUrl.startsWith('mailto:') || rawUrl.startsWith('tel:')) return rawUrl;
  try {
    const resolved = new URL(rawUrl, baseUrl);
    const mapped = ROUTE_BY_LEGACY_PATH[resolved.pathname];
    if (!mapped) return resolved.pathname + resolved.search + resolved.hash;
    return `${mapped}${resolved.search}${resolved.hash}`;
  } catch {
    return rawUrl;
  }
};

const rewriteScriptNavigation = (scriptText, baseUrl) =>
  scriptText.replace(/(['"])([^'"]*html\/[^'"]+\.html(?:\?[^'"]*)?)\1/g, (_m, quote, urlPart) => {
    const nextUrl = normalizeToAppPath(urlPart, baseUrl);
    return `${quote}${nextUrl}${quote}`;
  });

export default function LegacyHtmlPage({ legacyPath }) {
  const containerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const cleanupNodes = [];
    const baseUrl = new URL(legacyPath, window.location.origin);

    const renderLegacy = async () => {
      const response = await fetch(legacyPath);
      const htmlText = await response.text();
      if (!mounted || !containerRef.current) return;

      const doc = new DOMParser().parseFromString(htmlText, 'text/html');
      document.title = doc.title || 'Sporty';

      doc.head.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => {
        const clone = node.cloneNode(true);
        if (clone.tagName === 'LINK') {
          const href = clone.getAttribute('href');
          if (href) clone.setAttribute('href', new URL(href, baseUrl).toString());
        }
        clone.setAttribute('data-legacy-page', legacyPath);
        document.head.appendChild(clone);
        cleanupNodes.push(clone);
      });

      const scripts = [...doc.body.querySelectorAll('script')];
      scripts.forEach((script) => script.remove());

      doc.body.querySelectorAll('[src]').forEach((el) => {
        const value = el.getAttribute('src');
        if (value) el.setAttribute('src', new URL(value, baseUrl).toString());
      });

      doc.body.querySelectorAll('a[href]').forEach((el) => {
        const href = el.getAttribute('href');
        if (href) el.setAttribute('href', normalizeToAppPath(href, baseUrl));
      });

      containerRef.current.innerHTML = doc.body.innerHTML;

      for (const script of scripts) {
        const runScript = document.createElement('script');
        for (const attr of script.attributes) runScript.setAttribute(attr.name, attr.value);
        if (script.src) {
          runScript.src = new URL(script.getAttribute('src') || '', baseUrl).toString();
        } else {
          runScript.textContent = rewriteScriptNavigation(script.textContent || '', baseUrl);
        }
        containerRef.current.appendChild(runScript);
      }
    };

    renderLegacy().catch((error) => {
      if (containerRef.current) {
        containerRef.current.innerHTML = `<div style="padding:16px;color:#fff;">Có lỗi xảy ra khi tải trang: ${error}</div>`;
      }
    });

    return () => {
      mounted = false;
      cleanupNodes.forEach((node) => node.remove());
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [legacyPath, location.search]);

  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
      event.preventDefault();
      navigate(href);
    };
    const root = containerRef.current;
    root?.addEventListener('click', onClick);
    return () => root?.removeEventListener('click', onClick);
  }, [navigate]);

  return <div ref={containerRef} />;
}

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const baseUrl = 'http://127.0.0.1:5173';
const outputDir = path.resolve('docs/screenshots');

const pages = [
  { slug: 'trang-chu', legacy: '/html/TrangChu.html', react: '/trang-chu' },
  { slug: 'gio-hang', legacy: '/html/GioHang.html', react: '/gio-hang' },
  { slug: 'gioi-thieu', legacy: '/html/GioiThieu.html', react: '/gioi-thieu' },
  { slug: 'lien-he', legacy: '/html/LienHe.html', react: '/lien-he' },
  { slug: 'dang-ky', legacy: '/html/DangKy.html', react: '/dang-ky' },
  { slug: 'hoi-dap', legacy: '/html/HoiDap.html', react: '/hoi-dap' },
  { slug: 'giao-tra-hang', legacy: '/html/GiaoTra.html', react: '/giao-tra-hang' },
  { slug: 'chinh-sach', legacy: '/html/ChinhSach.html', react: '/chinh-sach' },
  { slug: 'san-pham-do-boi', legacy: '/html/SanPham/SanPham_DoBoi.html', react: '/san-pham/do-boi' },
  { slug: 'san-pham-phu-kien-boi', legacy: '/html/SanPham/SanPham_PhuKienBoi.html', react: '/san-pham/phu-kien-boi' },
  { slug: 'san-pham-giam-gia', legacy: '/html/SanPham/SanPham_GiamGia.html', react: '/san-pham/giam-gia' },
  { slug: 'chi-tiet-do-boi', legacy: '/html/SanPham/ChiTietSanPham_DoBoi.html?id=1', react: '/chi-tiet/do-boi?id=1' },
  { slug: 'chi-tiet-phu-kien', legacy: '/html/SanPham/ChiTietSanPham_PhuKien.html?id=1', react: '/chi-tiet/phu-kien?id=1' },
  { slug: 'chi-tiet-giam-gia', legacy: '/html/SanPham/ChiTietSanPham_GiamGia.html?id=1', react: '/chi-tiet/giam-gia?id=1' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

try {
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    for (const item of pages) {
      for (const variant of [
        { key: 'legacy', url: item.legacy },
        { key: 'react', url: item.react },
      ]) {
        await page.goto(`${baseUrl}${variant.url}`, { waitUntil: 'networkidle', timeout: 120000 });
        await page.screenshot({
          path: path.join(outputDir, `${item.slug}-${variant.key}-${vp.name}.png`),
          fullPage: true,
        });
      }
    }
  }
} finally {
  await browser.close();
}

console.log('Screenshots captured successfully.');

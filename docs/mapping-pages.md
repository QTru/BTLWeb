# HTML -> React Mapping

| Legacy HTML | React Page | Route |
|---|---|---|
| `html/TrangChu.html` | `src/pages/HomePage.jsx` | `/trang-chu` |
| `html/GioHang.html` | `src/pages/CartPage.jsx` | `/gio-hang` |
| `html/GioiThieu.html` | `src/pages/AboutPage.jsx` | `/gioi-thieu` |
| `html/LienHe.html` | `src/pages/ContactPage.jsx` | `/lien-he` |
| `html/DangKy.html` | `src/pages/RegisterPage.jsx` | `/dang-ky` |
| `html/HoiDap.html` | `src/pages/FaqPage.jsx` | `/hoi-dap` |
| `html/GiaoTra.html` | `src/pages/DeliveryReturnPage.jsx` | `/giao-tra-hang` |
| `html/ChinhSach.html` | `src/pages/PolicyPage.jsx` | `/chinh-sach` |
| `html/SanPham/SanPham_DoBoi.html` | `src/pages/SwimwearCategoryPage.jsx` | `/san-pham/do-boi` |
| `html/SanPham/SanPham_PhuKienBoi.html` | `src/pages/AccessoriesCategoryPage.jsx` | `/san-pham/phu-kien-boi` |
| `html/SanPham/SanPham_GiamGia.html` | `src/pages/DiscountCategoryPage.jsx` | `/san-pham/giam-gia` |
| `html/SanPham/ChiTietSanPham_DoBoi.html` | `src/pages/SwimwearDetailPage.jsx` | `/chi-tiet/do-boi` |
| `html/SanPham/ChiTietSanPham_PhuKien.html` | `src/pages/AccessoriesDetailPage.jsx` | `/chi-tiet/phu-kien` |
| `html/SanPham/ChiTietSanPham_GiamGia.html` | `src/pages/DiscountDetailPage.jsx` | `/chi-tiet/giam-gia` |

## Shared React component usage

- `src/components/LegacyHtmlPage.jsx` is reused by all route pages to:
  - load original HTML body,
  - preserve and inject original CSS/inline styles,
  - execute original scripts in browser context,
  - rewrite legacy links and script redirects into React Router routes.

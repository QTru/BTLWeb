# Inventory - Legacy to React/Vite

## HTML pages

- `html/TrangChu.html`
- `html/GioHang.html`
- `html/GioiThieu.html`
- `html/LienHe.html`
- `html/DangKy.html`
- `html/HoiDap.html`
- `html/GiaoTra.html`
- `html/ChinhSach.html`
- `html/SanPham/SanPham_DoBoi.html`
- `html/SanPham/SanPham_PhuKienBoi.html`
- `html/SanPham/SanPham_GiamGia.html`
- `html/SanPham/ChiTietSanPham_DoBoi.html`
- `html/SanPham/ChiTietSanPham_PhuKien.html`
- `html/SanPham/ChiTietSanPham_GiamGia.html`
- `html/Template.html` (base layout reference)

## CSS files

- `css/bootstrap.css`
- `css/bootstrap-grid.css`
- `css/bootstrap-reboot.css`
- `css/bootstrap-utilities.css`
- `css/bootstrap.rtl.css`
- `css/bootstrap-grid.rtl.css`
- `css/bootstrap-reboot.rtl.css`
- `css/bootstrap-utilities.rtl.css`
- `css/all.css`
- `css/brands.css`
- `css/fontawesome.css`
- `css/regular.css`
- `css/regular.min.css`
- `css/solid.css`
- `css/solid.min.css`
- `css/svg-with-js.css`
- `css/v4-font-face.css`
- `css/v4-font-face.min.css`
- `css/v4-shims.css`
- `css/v5-font-face.css`
- `css/v5-font-face.min.css`
- `css/template.css`

## JS files

- `js/bootstrap.bundle.js`
- `js/bootstrap.js`
- `js/bootstrap.esm.js`
- `js/all.js`
- `js/fontawesome.js`
- `js/brands.js`
- `js/regular.js`
- `js/solid.js`
- `js/v4-shims.js`
- `js/conflict-detection.js`

## Data and assets

- Data JSON:
  - `data/data_Doboi.json`
  - `data/data_PhuKien.json`
  - `data/data_GiamGia.json`
- Image directories:
  - `img/`
  - `imgs/`
- Font and icon directories:
  - `webfonts/`
  - `svgs/`
  - `sprites/`

## localStorage keys

- `cart`

## Important legacy functions (detected in HTML)

- `login()`, `find()`
- `checkTen()`, `checkPass()`, `checkRepass()`, `checkEmail()`, `checkSdt()`, `checkAddress()`, `createAcc()`
- `checkHoTen()`, `send()`
- Product list/filter functions:
  - `animationBoLoc()`
  - `filterByCategory()`
  - `filterByCollection()`
  - `filterByPrice()`
  - `formatPrice()`, `parsePrice()`
- Product detail/cart functions:
  - `animationThongTin()`
  - `updateCartCount()`
  - `addToCart()`
  - `addToCartFromPage()`
  - `resetCart()`
- Cart page functions:
  - `displayCartItems()`
  - `removeFromCart()`
  - `clearCart()`
  - `updateQuantity()`
  - `updateTotal()`

## Navigation flow (legacy)

- Main nav links route between `TrangChu`, product category pages, `GioiThieu`, `LienHe`, `DangKy`, `GioHang`.
- Footer links route to category/info/discovery/customer-service pages.
- Product category cards navigate to corresponding detail pages with query `?id=...`.
- Detail pages navigate to cart via nav and floating cart icon.
- Login and account create success flows redirect to `TrangChu`.
- Search flow redirects to `SanPham_GiamGia`.

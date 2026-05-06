# QA Parity Checklist

## Global checks

- [x] React + Vite app starts/builds successfully.
- [x] React Router routes exist for all required pages.
- [x] Legacy text content (Vietnamese with diacritics) preserved.
- [x] Legacy alerts preserved via original scripts.
- [x] localStorage key `cart` preserved.
- [x] Bootstrap and Font Awesome rendering retained from legacy pages.

## Page-by-page parity checklist

### Trang chủ (`/trang-chu`)
- [x] Header/nav layout parity
- [x] Hero background/image/overlay parity
- [x] Button hover and style parity
- [x] `login()` flow parity
- [x] `find()` flow parity
- [x] Footer email subscribe validation parity

### Giỏ hàng (`/gio-hang`)
- [x] Cart list render parity
- [x] Quantity update parity
- [x] Remove item parity
- [x] Clear all parity
- [x] Total invoice calculation parity
- [x] Checkout empty-cart alert parity

### Giới thiệu (`/gioi-thieu`)
- [x] Content and layout parity
- [x] Footer behavior parity

### Liên hệ (`/lien-he`)
- [x] Contact form validation/messages parity
- [x] Footer behavior parity

### Đăng ký (`/dang-ky`)
- [x] Registration field validation parity
- [x] Alerts/messages parity
- [x] Redirect on success parity

### Hỏi đáp (`/hoi-dap`)
- [x] Content/accordion/layout parity
- [x] Footer behavior parity

### Giao/Trả hàng (`/giao-tra-hang`)
- [x] Content/layout parity
- [x] Footer email subscribe parity

### Chính sách (`/chinh-sach`)
- [x] Content/layout parity
- [x] Footer email subscribe parity

### Danh mục sản phẩm
- [x] `/san-pham/do-boi` filters/listing/parity
- [x] `/san-pham/phu-kien-boi` filters/listing/parity
- [x] `/san-pham/giam-gia` filters/listing/parity

### Chi tiết sản phẩm
- [x] `/chi-tiet/do-boi` render/add-to-cart parity
- [x] `/chi-tiet/phu-kien` render/add-to-cart parity
- [x] `/chi-tiet/giam-gia` render/add-to-cart parity
- [x] Floating cart icon behavior parity

## Screenshot evidence

- Stored in `docs/screenshots/`.
- Naming convention: `<page>-<source>-<viewport>.png`
  - source: `legacy` or `react`
  - viewport: `desktop`, `tablet`, `mobile`

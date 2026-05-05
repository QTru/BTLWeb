import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import StaticPage from './pages/StaticPage'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/san-pham/:type" element={<ProductListPage />} />
        <Route path="/chi-tiet/:type/:id" element={<ProductDetailPage />} />
        <Route path="/gio-hang" element={<CartPage />} />
        <Route path="/gioi-thieu" element={<StaticPage title="GI?I THI?U" />} />
        <Route path="/lien-he" element={<StaticPage title="LIÊN H?" />} />
        <Route path="/dang-ky" element={<StaticPage title="ÐANG KÝ" />} />
        <Route path="/hoi-dap" element={<StaticPage title="H?I ÐÁP" />} />
        <Route path="/giao-tra" element={<StaticPage title="GIAO HÀNG & TR? HÀNG" />} />
        <Route path="/chinh-sach" element={<StaticPage title="CHÍNH SÁCH C?A HÀNG" />} />
      </Routes>
    </MainLayout>
  )
}


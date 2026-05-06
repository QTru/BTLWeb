import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import FaqPage from './pages/FaqPage';
import DeliveryReturnPage from './pages/DeliveryReturnPage';
import PolicyPage from './pages/PolicyPage';
import SwimwearCategoryPage from './pages/SwimwearCategoryPage';
import AccessoriesCategoryPage from './pages/AccessoriesCategoryPage';
import DiscountCategoryPage from './pages/DiscountCategoryPage';
import SwimwearDetailPage from './pages/SwimwearDetailPage';
import AccessoriesDetailPage from './pages/AccessoriesDetailPage';
import DiscountDetailPage from './pages/DiscountDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/trang-chu" replace />} />

      <Route path="/trang-chu" element={<HomePage />} />
      <Route path="/gio-hang" element={<CartPage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/lien-he" element={<ContactPage />} />
      <Route path="/dang-ky" element={<RegisterPage />} />
      <Route path="/hoi-dap" element={<FaqPage />} />
      <Route path="/giao-tra-hang" element={<DeliveryReturnPage />} />
      <Route path="/chinh-sach" element={<PolicyPage />} />

      <Route path="/san-pham/do-boi" element={<SwimwearCategoryPage />} />
      <Route path="/san-pham/phu-kien-boi" element={<AccessoriesCategoryPage />} />
      <Route path="/san-pham/giam-gia" element={<DiscountCategoryPage />} />

      <Route path="/chi-tiet/do-boi" element={<SwimwearDetailPage />} />
      <Route path="/chi-tiet/phu-kien" element={<AccessoriesDetailPage />} />
      <Route path="/chi-tiet/giam-gia" element={<DiscountDetailPage />} />

      <Route path="*" element={<Navigate to="/trang-chu" replace />} />
    </Routes>
  );
}

export default App;

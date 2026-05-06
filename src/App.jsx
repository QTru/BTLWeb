import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TrangChu from './pages/TrangChu'
import GioiThieu from './pages/GioiThieu'
import LienHe from './pages/LienHe'
import DangKy from './pages/DangKy'
import GioHang from './pages/GioHang'
import HoiDap from './pages/HoiDap'
import GiaoTra from './pages/GiaoTra'
import ChinhSach from './pages/ChinhSach'
import SanPham_DoBoi from './pages/SanPham/SanPham_DoBoi'
import SanPham_PhuKienBoi from './pages/SanPham/SanPham_PhuKienBoi'
import SanPham_GiamGia from './pages/SanPham/SanPham_GiamGia'
import ChiTietSanPham_DoBoi from './pages/SanPham/ChiTietSanPham_DoBoi'
import ChiTietSanPham_PhuKien from './pages/SanPham/ChiTietSanPham_PhuKien'
import ChiTietSanPham_GiamGia from './pages/SanPham/ChiTietSanPham_GiamGia'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/TrangChu" element={<TrangChu />} />
        <Route path="/GioiThieu" element={<GioiThieu />} />
        <Route path="/LienHe" element={<LienHe />} />
        <Route path="/DangKy" element={<DangKy />} />
        <Route path="/GioHang" element={<GioHang />} />
        <Route path="/HoiDap" element={<HoiDap />} />
        <Route path="/GiaoTra" element={<GiaoTra />} />
        <Route path="/ChinhSach" element={<ChinhSach />} />
        <Route path="/SanPham/DoBoi" element={<SanPham_DoBoi />} />
        <Route path="/SanPham/PhuKienBoi" element={<SanPham_PhuKienBoi />} />
        <Route path="/SanPham/GiamGia" element={<SanPham_GiamGia />} />
        <Route path="/SanPham/ChiTiet/DoBoi/:id" element={<ChiTietSanPham_DoBoi />} />
        <Route path="/SanPham/ChiTiet/PhuKien/:id" element={<ChiTietSanPham_PhuKien />} />
        <Route path="/SanPham/ChiTiet/GiamGia/:id" element={<ChiTietSanPham_GiamGia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

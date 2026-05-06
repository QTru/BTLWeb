import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isActive = (path) => location.pathname === path ? 'active' : ''
  const isSanPham = () => location.pathname.startsWith('/SanPham') ? 'active' : ''

  return (
    <header className="mb-xl-5">
      <nav className="navbar navbar-expand-xl navbar-dark fixed-top px-xl-5" style={{ backgroundColor: '#183c55' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/TrangChu">Sporty</Link>
          <button
            className="navbar-toggler d-xl-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/TrangChu')} ${isActive('/')}`} to="/TrangChu">Trang chủ</Link>
              </li>
              <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                <a
                  className={`nav-link dropdown-toggle ${isSanPham()}`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen) }}
                >
                  Sản phẩm
                </a>
                <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item" to="/SanPham/DoBoi" onClick={() => setDropdownOpen(false)}>
                      Đồ bơi
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/SanPham/PhuKienBoi" onClick={() => setDropdownOpen(false)}>
                      Phụ kiện bơi
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/SanPham/GiamGia" onClick={() => setDropdownOpen(false)}>
                      Hàng giảm giá
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/GioiThieu')}`} to="/GioiThieu">Giới thiệu</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/LienHe')}`} to="/LienHe">Liên hệ</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/DangKy')}`} to="/DangKy">
                  <i className="fas fa-user me-1"></i> Đăng ký
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/GioHang')}`} to="/GioHang">
                  <i className="fas fa-shopping-cart me-1"></i> Giỏ hàng
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

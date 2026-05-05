import { NavLink } from 'react-router-dom'
import '../styles/header.css'

const navClass = ({ isActive }) => `transition-colors hover:text-[#e74c3c] ${isActive ? 'text-[#e74c3c]' : 'text-white'}`

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#183c55] px-6 py-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <NavLink to="/" className="text-2xl text-white">Sporty</NavLink>
        <nav className="flex items-center gap-5 text-sm md:text-base">
          <NavLink to="/" className={navClass}>Trang ch?</NavLink>
          <NavLink to="/san-pham/do-boi" className={navClass}>Ð? boi</NavLink>
          <NavLink to="/san-pham/phu-kien-boi" className={navClass}>Ph? ki?n</NavLink>
          <NavLink to="/san-pham/giam-gia" className={navClass}>Gi?m giá</NavLink>
          <NavLink to="/gioi-thieu" className={navClass}>Gi?i thi?u</NavLink>
          <NavLink to="/lien-he" className={navClass}>Liên h?</NavLink>
          <NavLink to="/dang-ky" className={navClass}>Ðang ký</NavLink>
          <NavLink to="/gio-hang" className={navClass}>Gi? hàng</NavLink>
        </nav>
      </div>
    </header>
  )
}


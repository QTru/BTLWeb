import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="bg-[#e74c3c] px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h4 className="text-2xl">
            Đăng ký ngay để được giảm 200k đơn tiếp theo
          </h4>
        </div>
      </div>
      <div className="bg-[#101c2c] px-6 py-8 text-gray-400">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4">
          <div>
            <h4 className="mb-2 text-[#e74c3c]">Mua sắm</h4>
            <Link to="/san-pham/do-boi" className="block">
              Đồ bơi
            </Link>
            <Link to="/san-pham/phu-kien-boi" className="block">
              Phụ kiện
            </Link>
            <Link to="/san-pham/giam-gia" className="block">
              Giảm giá
            </Link>
          </div>
          <div>
            <h4 className="mb-2 text-[#e74c3c]">Thông tin</h4>
            <Link to="/hoi-dap" className="block">
              Hỏi đáp
            </Link>
            <Link to="/giao-tra" className="block">
              Giao hàng & Trả hàng
            </Link>
            <Link to="/chinh-sach" className="block">
              Chính sách cửa hàng
            </Link>
          </div>
          <div>
            <h4 className="mb-2 text-[#e74c3c]">Khám phá</h4>
            <Link to="/gioi-thieu" className="block">
              Giới thiệu
            </Link>
            <Link to="/lien-he" className="block">
              Liên hệ
            </Link>
          </div>
          <div>
            <h4 className="mb-2 text-[#e74c3c]">Dịch vụ khách hàng</h4>
            <a href="tel:0999-123-456" className="block">
              0999 123 456
            </a>
            <a href="mailto:buiquoctru@gmail.com" className="block">
              buiquoctru@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


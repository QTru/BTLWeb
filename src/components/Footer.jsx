import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEmailValidation } from '../hooks/useEmailValidation'

function Footer() {
  const { email, emailError, handleEmailChange, validateAndSubmit } = useEmailValidation()

  const handleSubmit = (e) => {
    e.preventDefault()
    validateAndSubmit(() => {
      alert('Đăng ký thành công! Cảm ơn bạn đã đăng ký nhận ưu đãi.')
    })
  }

  return (
    <footer>
      <div className="row py-5 mx-auto text-light mt-5" style={{ backgroundColor: '#e74c3c' }}>
        <div className="col-4 mx-auto">
          <h4 className="fw-normal text-nowrap">Đăng ký ngay để được giảm 200k đơn tiếp theo</h4>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mt-3 text-light ps-3"
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              style={{
                borderRadius: 0,
                border: emailError ? '4px solid #ff0000' : '4px solid #e08898',
                backgroundColor: '#e74c3c',
              }}
              placeholder="Nhập email của bạn ở đây"
            />
            {emailError && (
              <div style={{ color: 'white', marginTop: 5, fontSize: 14, padding: 5, backgroundColor: 'rgba(255,0,0,0.2)', borderRadius: 4 }}>
                Vui lòng nhập địa chỉ email hợp lệ!
              </div>
            )}
            <button
              className="btn w-100 btn-light mt-3"
              type="submit"
              style={{ borderRadius: '0 12px 0 0', color: '#e74c3c' }}
            >
              Đăng ký ngay
            </button>
          </form>
        </div>
      </div>
      <div className="row py-5 mx-auto px-xl-5 text-nowrap" style={{ backgroundColor: '#101c2c' }}>
        <div className="col-2 mx-auto">
          <h4 className="pb-2 fw-normal" style={{ color: '#e74c3c' }}>Mua sắm</h4>
          <Link className="link-secondary d-block text-decoration-none" to="/SanPham/DoBoi">Đồ bơi</Link>
          <Link className="link-secondary d-block text-decoration-none" to="/SanPham/PhuKienBoi">Phụ kiện</Link>
          <Link className="link-secondary d-block text-decoration-none" to="/SanPham/GiamGia">Giảm giá</Link>
        </div>
        <div className="col-2 mx-auto">
          <h4 className="pb-2 fw-normal" style={{ color: '#e74c3c' }}>Thông tin</h4>
          <Link className="link-secondary d-block text-decoration-none" to="/HoiDap">Hỏi đáp</Link>
          <Link className="link-secondary d-block text-decoration-none" to="/GiaoTra">Giao hàng &amp; Trả hàng</Link>
          <Link className="link-secondary d-block text-decoration-none" to="/ChinhSach">Chính sách cửa hàng </Link>
          <Link className="link-secondary d-block text-decoration-none" to="/ChinhSach">Phương thức thanh toán</Link>
        </div>
        <div className="col-2 mx-auto">
          <h4 className="pb-2 fw-normal" style={{ color: '#e74c3c' }}>Khám phá</h4>
          <Link className="link-secondary d-block text-decoration-none" to="/GioiThieu">Giới thiệu</Link>
          <Link className="link-secondary d-block text-decoration-none" to="/LienHe">Liên hệ</Link>
          <Link className="link-secondary d-block text-decoration-none" to="/LienHe">Đại lý</Link>
        </div>
        <div className="col-2 mx-auto">
          <h4 className="pb-2 fw-normal" style={{ color: '#e74c3c' }}>Dịch vụ khách hàng</h4>
          <a className="link-secondary d-block text-decoration-none" href="tel:0999-123-456">Điện thoại: 0999 123 456</a>
          <a className="link-secondary d-block text-decoration-none" href="mailto:buiquoctru@gmail.com">Email: buiquoctru@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

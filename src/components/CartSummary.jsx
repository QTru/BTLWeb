export default function CartSummary({ total, onCheckout, onClear }) {
  return (
    <div className="ml-auto max-w-sm text-right">
      <h4 className="mb-3 text-2xl">
        Tổng hóa đơn: {total.toLocaleString('vi-VN')}₫
      </h4>
      <button
        onClick={onCheckout}
        className="w-40 bg-[#e74c3c] py-2"
      >
        Thanh toán
      </button>
      <button
        onClick={onClear}
        className="mt-2 w-40 border border-[#e74c3c] py-2 text-[#e74c3c]"
      >
        Xóa tất cả
      </button>
    </div>
  )
}


function CartItem({ item, onRemove, onQuantityChange }) {
  return (
    <div className="cart-item" data-id={item.id}>
      <div className="row align-items-center">
        <div className="col-5 d-flex align-items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-25"
            style={{ borderRadius: 5, height: 100 }}
          />
          <div className="text-start ms-5">
            <h5>{item.name}</h5>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <input
            type="number"
            className="form-control mb-1"
            value={item.quantity}
            min="1"
            style={{ width: 150, paddingLeft: '15%' }}
            onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
          />
          <div className="text-start ms-5">
            <h5>{item.price.toLocaleString('vi-VN')}₫</h5>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <h5 className="me-5">{(item.price * item.quantity).toLocaleString('vi-VN')}₫</h5>
          <button
            className="btn btn-outline-danger"
            onClick={() => onRemove(item.id)}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

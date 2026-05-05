import { useEffect, useMemo, useState } from 'react'
import { getCart, saveCart } from '../services/cartService'
import CartSummary from '../components/CartSummary'

export default function CartPage() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(getCart())
  }, [])

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  )

  const update = (id, quantity) => {
    const next = cart.map((i) =>
      i.id === id ? { ...i, quantity } : i
    )
    setCart(next)
    saveCart(next)
  }

  const remove = (id) => {
    const next = cart.filter((i) => i.id !== id)
    setCart(next)
    saveCart(next)
  }

  return (
    <div>
      <h2 className="mb-6 text-4xl">Giỏ hàng của bạn</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 items-center gap-4 border-b border-white/20 pb-4 md:grid-cols-[1.5fr_1fr_1fr_auto]"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded object-cover"
              />
              <h5>{item.name}</h5>
            </div>
            <input
              type="number"
              min={1}
              value={item.quantity}
              onChange={(e) => update(item.id, Number(e.target.value))}
              className="w-24 text-black"
            />
            <p>
              {(item.price * item.quantity).toLocaleString('vi-VN')}₫
            </p>
            <button
              onClick={() => remove(item.id)}
              className="border border-[#e74c3c] px-3 py-1 text-[#e74c3c]"
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
      <CartSummary
        total={total}
        onCheckout={() =>
          alert('Đã gửi đơn hàng thành công!')
        }
        onClear={() => {
          setCart([])
          saveCart([])
        }}
      />
    </div>
  )
}


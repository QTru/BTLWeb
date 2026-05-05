import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  SWIMWEAR_PRODUCTS,
  ACCESSORY_PRODUCTS,
  SALE_PRODUCTS,
} from '../data/products'
import { formatPrice } from '../utils/format'
import { addCartItem } from '../services/cartService'

const sources = {
  'do-boi': SWIMWEAR_PRODUCTS,
  'phu-kien-boi': ACCESSORY_PRODUCTS,
  'giam-gia': SALE_PRODUCTS,
}

export default function ProductDetailPage() {
  const { type, id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const product = useMemo(
    () => (sources[type] || []).find((p) => String(p.id) === id),
    [type, id]
  )

  if (!product)
    return <p>Không tìm thấy sản phẩm.</p>

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div>
        <img src={product.image} alt={product.name} className="w-full rounded" />
        <h3 className="mt-4 text-2xl">Mô tả:</h3>
        <p className="text-gray-300">{product.description}</p>
      </div>
      <div>
        <h1 className="text-3xl">{product.name}</h1>
        <h2 className="my-3 text-3xl text-[#e74c3c]">
          {formatPrice(product.price)}
        </h2>
        <div className="my-5 flex items-center gap-4">
          <span>Số lượng:</span>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Number(e.target.value)))
            }
            className="w-24 text-black"
          />
        </div>
        <button
          onClick={() => {
            addCartItem(product, quantity)
            alert('Sản phẩm đã được thêm vào giỏ hàng!')
          }}
          className="rounded bg-[#e74c3c] px-6 py-3"
        >
          THÊM VÀO GIỎ HÀNG
        </button>
      </div>
    </div>
  )
}


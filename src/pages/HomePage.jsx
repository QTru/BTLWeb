import { Link } from 'react-router-dom'
import swimmer1 from '../assets/img/swimmer1.png'

export default function HomePage() {
  return (
    <div>
      <section className="relative h-[675px] overflow-hidden">
        <img src={swimmer1} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute left-24 top-1/2 -translate-y-1/2">
          <h1 className="mb-3 w-2/3 text-5xl font-bold">
            PHÁ VỠ MỌI GIỚI HẠN
          </h1>
          <p>Với đồ bơi thi đấu của Sporty</p>
          <Link
            to="/san-pham/giam-gia"
            className="mt-4 inline-block rounded-tr-xl border-2 border-white px-5 py-2"
          >
            Đang giảm giá
          </Link>
        </div>
      </section>
    </div>
  )
}


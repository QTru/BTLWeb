export default function Filter({
  categories,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  range,
}) {
  return (
    <aside className="w-full lg:w-72">
      <h3 className="mb-4 text-xl">Lọc Theo</h3>
      <div className="border-t border-white/20 py-4">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`block py-1 text-left ${
              selectedCategory === cat.value
                ? 'text-[#e74c3c]'
                : 'text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="border-t border-white/20 py-4">
        <input
          type="range"
          min={range.min}
          max={range.max}
          step={50000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <p className="mt-2">
          Tối đa: {maxPrice.toLocaleString('vi-VN')} ₫
        </p>
      </div>
    </aside>
  )
}


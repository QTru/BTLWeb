export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="mt-6 flex gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`h-9 w-9 rounded ${
            p === page ? 'bg-[#e74c3c]' : 'bg-white text-black'
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  )
}


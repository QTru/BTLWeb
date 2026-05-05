export default function Banner({ title, image }) {
  return (
    <div className="flex h-80 w-full items-center justify-between bg-[#e74c3c]">
      <h1 className="w-1/2 text-center text-5xl font-bold">{title}</h1>
      <img src={image} alt={title} className="h-full w-1/2 object-cover" />
    </div>
  )
}


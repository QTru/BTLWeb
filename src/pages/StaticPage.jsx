export default function StaticPage({ title }) {
  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-5xl font-bold">{title}</h1>
      <p className="text-[#c5c5c5]">
        Nội dung trang được migrate từ bản HTML cũ sang React, giữ màu sắc
        và bố cục từ vến cũ. Bạn có thể tiếp tục tinh chỉnh text chi tiết
        theo nhu cầu.
      </p>
    </section>
  )
}


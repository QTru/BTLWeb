import Header from './Header'
import Footer from './Footer'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#183c5c] text-white">
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 pt-28">
        {children}
      </main>
      <Footer />
    </div>
  )
}


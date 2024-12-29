import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from '@/context/CartContext'
import { WishlistProvider } from '@/context/WishlistContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hamza Store - Your Premium Shopping Destination',
  description: 'Discover a world of quality products at Hamza Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="min-h-screen p-4 bg-gray-50">{children}</main>
            <Footer />
            <Toaster position="bottom-right" />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}


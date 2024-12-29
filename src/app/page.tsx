import ProductCard from '@/components/ProductCard'
import { Product } from '@/types'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="container mx-auto">
      <Header/>
      <Banner/>
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}


import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Star } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'
import WishlistButton from '@/components/WishlistButton'
import { Product } from '@/types'

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`http://localhost:3000/api/products`)
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  const products: Product[] = await res.json()
  return products.find((p) => p.id === parseInt(id)) || null
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-col md:flex-row md:gap-12">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={500} 
            height={500} 
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>
          
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="ml-1 text-gray-600">{product.reviews} Reviews</span>
          </div>
          
          <p className="text-lg text-gray-600 mb-4">Color: <span className="font-semibold text-gray-800">{product.color}</span></p>
          
          <p className="text-base text-gray-700 mb-6">{product.description}</p>
          
          {/* Action Buttons */}
          <div className="flex space-x-6">
            <AddToCartButton product={product} />
            <WishlistButton product={product} />
          </div>
        </div>
      </div>

      {/* Yellow-Themed Button */}
      <div className="mt-8 text-center">
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

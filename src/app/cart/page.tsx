'use client';

import { useCart } from '@/context/CartContext';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id: number) => {
    removeFromCart(id);
    toast.success('Item removed from cart');
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  return (
    <div className="container mx-auto py-16 px-4 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        Your Shopping Cart
      </h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-xl text-gray-600 mb-6">Your cart is currently empty.</p>
          <Link
            href="/"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg mb-8">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Total</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-md shadow-sm"
                        />
                        <span className="text-gray-800 font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-gray-600">{item.quantity}</td>
                    <td className="px-6 py-4 text-gray-600">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition duration-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 bg-gray-50 rounded-lg p-6 shadow-md">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300"
            >
              Clear Cart
            </button>
            <div className="text-2xl font-semibold text-gray-800">
              Total: <span className="text-yellow-500">${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="text-center">
          <Link
  href="/checkout"
  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full shadow-md text-lg font-semibold hover:shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-300"
>
  Proceed to Checkout
</Link>
          </div>
        </>
      )}
    </div>
  );
}

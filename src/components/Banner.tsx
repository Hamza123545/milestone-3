import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white overflow-hidden mb-10 shadow-xl">
      <div className="absolute inset-0">
        <Image
          src="/products/bg.png"
          alt="New Deals Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <div className="relative max-w-5xl mx-auto py-20 px-8 sm:px-10 lg:px-14 flex flex-col items-start justify-center text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Discover New Deals
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-12">
          Up to <span className="text-yellow-400 font-bold">50% off</span> on your favorite products. Shop now and save big!
        </p>
        <div className="flex gap-6">
          <Link href="/products">
            <div className="bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
              Shop Now
            </div>
          </Link>
          <Link href="/sale-items">
            <div className="bg-gray-800 border-2 border-yellow-400 text-yellow-400 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-105">
              View Sale Items
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

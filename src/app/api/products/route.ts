import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Luxury Gold Watch', price: 399.99, image: '/products/Luxury Gold Watch.jpeg', description: 'A premium gold-plated watch for formal occasions', color: 'Gold', reviews: 4.7 },
  { id: 2, name: 'Vintage Leather Satchel', price: 149.99, image: '/products/Vintage Leather Satchel.jpeg', description: 'A spacious leather satchel with a vintage look', color: 'Brown', reviews: 4.4 },
  { id: 3, name: 'Bluetooth Noise Cancelling Headphones', price: 179.99, image: '/products/Bluetooth Noise Cancelling Headphones.jpeg', description: 'High-quality sound and noise-cancelling feature for a perfect listening experience', color: 'Black', reviews: 4.8 },
  { id: 4, name: 'Classic Aviator Sunglasses', price: 89.99, image: '/products/Classic Aviator Sunglasses.jpg', description: 'Timeless aviator sunglasses to add style to your look', color: 'Silver', reviews: 4.3 },
  { id: 5, name: 'Running Sneakers', price: 129.99, image: '/products/Running Sneakers.jpeg', description: 'Breathable and lightweight sneakers for a comfortable run', color: 'Black', reviews: 4.6 },
  { id: 6, name: 'Deluxe Coffee Maker', price: 179.99, image: '/products/Deluxe Coffee Maker.jpeg', description: 'A sleek coffee maker that brews your favorite coffee perfectly', color: 'Stainless Steel', reviews: 4.5 },
  { id: 7, name: 'Professional Blender', price: 149.99, image: '/products/Professional Blender.jpeg', description: 'A powerful blender perfect for smoothies and shakes', color: 'Red', reviews: 4.8 },
  { id: 8, name: 'Elegant Toaster', price: 79.99, image: '/products/Elegant Toaster.jpeg', description: 'A two-slice toaster with extra-wide slots', color: 'White', reviews: 4.2 },
  { id: 9, name: 'Compact Microwave Oven', price: 99.99, image: '/products/Compact Microwave Oven.jpeg', description: 'A sleek and compact microwave for small kitchens', color: 'Black', reviews: 4.4 },
  { id: 10, name: 'Rapid Boil Kettle', price: 59.99, image: '/products/Rapid Boil Kettle.jpeg', description: 'A stylish kettle with quick boiling time', color: 'Chrome', reviews: 4.7 },
  { id: 11, name: 'Ceramic Hair Dryer', price: 69.99, image: '/products/Ceramic Hair Dryer.jpg', description: 'A powerful hair dryer with ceramic technology to minimize hair damage', color: 'White', reviews: 4.6 },
  { id: 12, name: 'Professional Hair Straightener', price: 89.99, image: '/products/Professional Hair Straightener1.jpeg', description: 'Straighten your hair with ease using this professional flat iron', color: 'Pink', reviews: 4.7 },
  { id: 13, name: 'Electric Curling Wand', price: 79.99, image: '/products/Electric Curling Wand.jpeg', description: 'Create bouncy curls effortlessly with this curling wand', color: 'Black', reviews: 4.3 },
  { id: 14, name: 'Smart Electric Toothbrush', price: 49.99, image: '/products/Smart Electric Toothbrush.jpg', description: 'An electric toothbrush with smart features for better oral care', color: 'White', reviews: 4.8 },
  { id: 15, name: 'Rechargeable Electric Shaver', price: 69.99, image: '/products/Rechargeable Electric Shaver.jpeg', description: 'A rechargeable electric shaver for a close and smooth shave', color: 'Black', reviews: 4.5 },
  { id: 16, name: 'High-End Laptop', price: 1499.99, image: '/products/High-End Laptop.jpeg', description: 'A high-performance laptop with top-tier specs', color: 'Silver', reviews: 4.9 },
  { id: 17, name: 'Flagship Smartphone', price: 899.99, image: '/products/Flagship Smartphone.jpeg', description: 'The latest flagship smartphone with cutting-edge technology', color: 'Black', reviews: 4.8 },
  { id: 18, name: 'Gaming Headset', price: 129.99, image: '/products/Gaming Headset.jpeg', description: 'A noise-cancelling gaming headset with a high-quality microphone', color: 'Red', reviews: 4.7 },
  { id: 19, name: '4K Tablet', price: 499.99, image: '/products/4K Tablet.jpeg', description: 'A high-resolution tablet with stunning 4K display', color: 'Black', reviews: 4.6 },
  { id: 20, name: 'Fitness Smartwatch', price: 199.99, image: '/products/Fitness Smartwatch.jpg', description: 'A fitness tracking smartwatch with heart-rate monitoring', color: 'Black', reviews: 4.8 },
];

export async function GET() {
  return NextResponse.json(products);
}

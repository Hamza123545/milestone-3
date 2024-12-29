import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Hamza's Store</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Hamza's Store, we’re redefining e-commerce by combining exceptional quality, innovation, and customer focus to create a shopping experience like no other.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Our Story</h2>
          <p className="mb-4">
            Since our founding in 2024, Hamza's Store has grown from a small startup into a trusted global brand. Our journey began with a simple idea: making high-quality products accessible to everyone.
          </p>
          <p className="mb-4">
            Today, our diverse team works tirelessly to curate a unique selection of items that combine style, quality, and affordability.
          </p>
          <p>
            From our humble beginnings to our thriving global presence, one thing remains unchanged: our commitment to delighting customers with every interaction.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/products/about.png"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-xl shadow-lg border-4 border-yellow-400"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-yellow-50 py-12 px-6 rounded-lg mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To inspire and empower our customers by offering a seamless shopping experience filled with products that enhance their lives. Our mission is rooted in trust, quality, and a relentless focus on customer satisfaction.
          </p>
        </div>
      </section>

     
    </div>
  );
}

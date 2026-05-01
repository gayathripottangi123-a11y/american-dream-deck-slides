'use client'

import Image from 'next/image'

export default function RetailSlide() {
  const flagshipBrands = [
    'Hermès', 'Louis Vuitton', 'Gucci', 'Prada',
    'Zara', 'H&M', 'Uniqlo', 'Primark',
    'Apple', 'Microsoft', 'Samsung', 'Nike'
  ]

  return (
    <div className="h-full bg-black p-16">
      <div className="mb-12">
        <div className="text-sm font-medium uppercase tracking-wider text-white/50 mb-4">
          Retail Excellence
        </div>
        <h2 className="text-6xl font-light text-white mb-4">
          From Luxury to Lifestyle
        </h2>
        <p className="text-xl text-white/70 max-w-2xl">
          450+ tenants across luxury, fashion, footwear, tech, and beauty
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-12">
        <Image
          src="/images/luxury-mall-interior.jpg"
          alt="Luxury Retail Interior"
          width={600}
          height={400}
          className="w-full h-80 object-cover rounded-lg"
        />
        <Image
          src="/images/luxury-corridor.jpg"
          alt="Luxury Corridor"
          width={600}
          height={400}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      {/* Flagship Brands Grid */}
      <div>
        <h3 className="text-2xl font-light text-white mb-6">Flagship Brands</h3>
        <div className="grid grid-cols-4 gap-4">
          {flagshipBrands.map((brand) => (
            <div
              key={brand}
              className="bg-white/5 border border-white/10 px-6 py-4 text-center text-white/80 hover:bg-white/10 transition-all"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* 0% Tax Highlight */}
      <div className="mt-8 bg-white/10 border border-white/20 p-6 rounded-lg">
        <div className="text-4xl font-light text-white mb-2">0% Sales Tax</div>
        <div className="text-white/70">On clothing and footwear in New Jersey</div>
      </div>
    </div>
  )
}
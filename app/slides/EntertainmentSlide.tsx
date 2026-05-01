'use client'

import Image from 'next/image'

export default function EntertainmentSlide() {
  return (
    <div className="h-full bg-white p-12 overflow-y-auto">
      <div className="mb-6">
        <div className="text-sm font-medium uppercase tracking-wider text-black/50 mb-2">
          Entertainment Platform
        </div>
        <h2 className="text-4xl font-light text-black mb-2">
          55% Entertainment
        </h2>
        <p className="text-lg text-black/70 max-w-2xl">
          The highest entertainment-to-retail ratio of any mall in North America
        </p>
      </div>

      {/* 3 Attraction Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-black/5 rounded-lg overflow-hidden">
          <Image
            src="/images/nickelodeon-universe.jpg"
            alt="Nickelodeon Universe"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-light text-black mb-1">Nickelodeon Universe</h3>
            <p className="text-black/70 text-xs mb-3">
              Largest indoor theme park in Western Hemisphere
            </p>
            <ul className="text-xs text-black/60 space-y-1">
              <li>• TMNT Shellraiser roller coaster</li>
              <li>• 35+ rides and attractions</li>
              <li>• Year-round operation</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/5 rounded-lg overflow-hidden">
          <Image
            src="/images/dreamworks-waterpark.jpg"
            alt="DreamWorks Water Park"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-light text-black mb-1">DreamWorks Water Park</h3>
            <p className="text-black/70 text-xs mb-3">
              Largest indoor water park in North America
            </p>
            <ul className="text-xs text-black/60 space-y-1">
              <li>• Largest indoor wave pool</li>
              <li>• Longest hydro-magnetic coaster</li>
              <li>• 15+ water slides</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/5 rounded-lg overflow-hidden">
          <Image
            src="/images/big-snow-ski.jpg"
            alt="Big SNOW"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-light text-black mb-1">Big SNOW</h3>
            <p className="text-black/70 text-xs mb-3">
              North America's first indoor real-snow ski resort
            </p>
            <ul className="text-xs text-black/60 space-y-1">
              <li>• Year-round skiing & snowboarding</li>
              <li>• Real snow at 28°F</li>
              <li>• Pro instruction available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import Image from 'next/image'
import { MapPin, Users, TrendingUp } from 'lucide-react'

export default function DestinationSlide() {
  return (
    <div className="h-full bg-white p-16 flex">
      {/* Left: Image */}
      <div className="w-1/2 pr-8">
        <Image
          src="/images/aerial-complex.jpg"
          alt="American Dream Aerial View"
          width={800}
          height={600}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right: Content */}
      <div className="w-1/2 pl-8 flex flex-col justify-center">
        <div className="mb-4 text-sm font-medium uppercase tracking-wider text-black/50">
          Prime Destination
        </div>
        <h2 className="text-5xl font-light text-black mb-8">
          East Rutherford, NJ
        </h2>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <MapPin className="text-black mt-1" size={24} />
            <div>
              <h3 className="text-xl font-medium text-black mb-2">Strategic Location</h3>
              <p className="text-black/70">
                5 miles from NYC, adjacent to MetLife Stadium. Direct access via NJ Transit and major highways.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="text-black mt-1" size={24} />
            <div>
              <h3 className="text-xl font-medium text-black mb-2">Market Demographics</h3>
              <p className="text-black/70">
                25 million people within 90-minute drive. Median household income: $85,000+
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TrendingUp className="text-black mt-1" size={24} />
            <div>
              <h3 className="text-xl font-medium text-black mb-2">Year-Round Traffic</h3>
              <p className="text-black/70">
                40 million annual visitors. Peak seasons: holidays, summer, entertainment events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import Image from 'next/image'
import { MapPin, Users, TrendingUp } from 'lucide-react'
import { VisitorChart, DemographicsChart } from '../components/charts/VisitorChart'

export default function DestinationSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-black via-gray-900 to-black p-16 overflow-y-auto">
      <div className="grid grid-cols-2 gap-12 h-full">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
            Prime Destination
          </div>
          <h2 className="text-5xl font-light text-white mb-8 hover:text-white/80 transition-colors cursor-default">
            East Rutherford, NJ
          </h2>

          <Image
            src="/images/aerial-complex.jpg"
            alt="American Dream Aerial View"
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-8 hover:scale-105 transition-transform duration-500"
          />

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <MapPin className="text-white mt-1 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Strategic Location</h3>
                <p className="text-white/70">
                  5 miles from NYC, adjacent to MetLife Stadium. Direct access via NJ Transit and major highways.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <Users className="text-white mt-1 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Market Demographics</h3>
                <p className="text-white/70">
                  25 million people within 90-minute drive. Median household income: $85,000+
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <TrendingUp className="text-white mt-1 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Year-Round Traffic</h3>
                <p className="text-white/70">
                  40 million annual visitors. Peak seasons: holidays, summer, entertainment events
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Charts */}
        <div className="flex flex-col justify-center gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-light text-white mb-4">Quarterly Visitor Traffic</h3>
            <VisitorChart />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-light text-white mb-4">Visitor Demographics</h3>
            <DemographicsChart />
          </div>
        </div>
      </div>
    </div>
  )
}
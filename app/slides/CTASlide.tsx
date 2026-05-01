'use client'

export default function CTASlide() {
  return (
    <div className="h-full bg-black flex items-center justify-center px-16 overflow-y-auto">
      <div className="max-w-3xl text-center py-12">
        <h2 className="text-6xl font-light text-white mb-6">
          Partner With<br />American Dream
        </h2>
        <p className="text-lg text-white/70 mb-10">
          Join 450+ brands in the most ambitious retail and entertainment destination ever built
        </p>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">Retail Leasing</div>
            <p className="text-white/60 text-sm">Premium spaces available</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">Sponsorships</div>
            <p className="text-white/60 text-sm">Brand partnership opportunities</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">Event Bookings</div>
            <p className="text-white/60 text-sm">Venues for any occasion</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <button className="w-full px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-all">
            Schedule a Tour
          </button>
          <button className="w-full px-8 py-4 border border-white/20 text-white text-sm font-medium uppercase tracking-wider hover:bg-white/10 transition-all">
            Download Leasing Guide
          </button>
        </div>

        <div className="text-white/50 text-sm">
          Contact: leasing@americandream.com | (201) 555-0100
        </div>
      </div>
    </div>
  )
}
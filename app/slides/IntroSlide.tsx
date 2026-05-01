'use client'

export default function IntroSlide() {
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/american-dream-overview.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center px-12">
        <h1 className="text-8xl font-light text-white mb-6">
          AMERICAN DREAM
        </h1>
        <p className="text-2xl text-white/80 mb-12">
          Where Retail Meets Entertainment
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-light text-white mb-2">3M</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Square Feet</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-white mb-2">450+</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Retail Tenants</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-white mb-2">40M</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Annual Visitors</div>
          </div>
        </div>

        <div className="mt-16">
          <button className="px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-all">
            Explore the Opportunity
          </button>
        </div>
      </div>
    </div>
  )
}
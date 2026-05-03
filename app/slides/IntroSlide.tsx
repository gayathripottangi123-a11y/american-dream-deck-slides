'use client'

export default function IntroSlide() {
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-12">
        <h1 className="text-8xl font-light text-white mb-6 hover:tracking-wider transition-all duration-700 cursor-default">
          AMERICAN DREAM
        </h1>
        <p className="text-2xl text-white/80 mb-12 hover:text-white transition-colors">
          Where Retail Meets Entertainment
        </p>

        {/* Stats with Hover Effects */}
        <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto mb-16">
          <div className="text-center group cursor-default">
            <div className="text-5xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-500">
              3M
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider group-hover:text-white transition-colors">
              Square Feet
            </div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-5xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-500">
              450+
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider group-hover:text-white transition-colors">
              Retail Tenants
            </div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-5xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-500">
              40M
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider group-hover:text-white transition-colors">
              Annual Visitors
            </div>
          </div>
        </div>

        {/* CTA with Premium Hover */}
        <div className="mt-16">
          <button className="group relative px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-wider overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Explore the Opportunity
            </span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </div>
  )
}
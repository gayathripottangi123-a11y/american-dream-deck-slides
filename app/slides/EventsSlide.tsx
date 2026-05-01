'use client'

export default function EventsSlide() {
  return (
    <div className="relative h-full w-full bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/mall-walkthrough.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-16">
        <div className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-wider text-white/50 mb-4">
            Events & Activations
          </div>
          <h2 className="text-6xl font-light text-white mb-8">
            A Global Platform,<br />Not Just a Building
          </h2>

          <div className="grid grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light text-white mb-4">Concert Venues</h3>
              <p className="text-white/70">
                Multiple performance spaces for artists, product launches, and live entertainment
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-white mb-4">Brand Activations</h3>
              <p className="text-white/70">
                Pop-up experiences, product releases, immersive marketing campaigns
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-white mb-4">Corporate Events</h3>
              <p className="text-white/70">
                Team building, conferences, exclusive gatherings in unique venues
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-white mb-4">Celebrity Appearances</h3>
              <p className="text-white/70">
                Meet & greets, signings, promotional events with A-list talent
              </p>
            </div>
          </div>

          <button className="px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-all">
            Book Your Event
          </button>
        </div>
      </div>
    </div>
  )
}
import React from 'react'

const DeviceShowcase = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Available Everywhere
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Access StyleSphere AI on all your devices for a seamless styling experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Phone 1 */}
          <div className="relative mx-auto">
            <div className="w-64 h-80 bg-black rounded-[2rem] p-2">
              <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-600 rounded-[1.5rem] overflow-hidden">
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                    <span>Profile</span>
                    <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                  </div>
                  
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-2"></div>
                    <div className="w-20 h-3 bg-white/40 rounded mx-auto mb-1"></div>
                    <div className="w-16 h-2 bg-white/30 rounded mx-auto"></div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="aspect-square bg-white/20 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 - Center */}
          <div className="relative mx-auto">
            <div className="w-64 h-80 bg-black rounded-[2rem] p-2">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-[1.5rem] overflow-hidden">
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                    <span>Recommendations</span>
                    <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="bg-white/20 rounded-xl p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white/30 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="w-full h-2 bg-white/40 rounded mb-1"></div>
                            <div className="w-3/4 h-2 bg-white/30 rounded"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 */}
          <div className="relative mx-auto">
            <div className="w-64 h-80 bg-black rounded-[2rem] p-2">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[1.5rem] overflow-hidden">
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                    <span>Community</span>
                    <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/10 rounded-lg p-2">
                        <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                        <div className="flex-1">
                          <div className="w-20 h-2 bg-white/40 rounded mb-1"></div>
                          <div className="w-16 h-1 bg-white/30 rounded"></div>
                        </div>
                        <div className="w-6 h-6 bg-white/20 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeviceShowcase
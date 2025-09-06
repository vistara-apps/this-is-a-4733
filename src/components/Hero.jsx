import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
              <span className="mr-2">🎨</span>
              Launch offer: experience the new AI experience
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              StyleSphere AI
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Placeholder for main device mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[500px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-black rounded-[2.5rem] p-2">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-[2rem] overflow-hidden">
                  {/* Phone Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between text-white">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="text-sm font-medium">StyleSphere</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                    
                    {/* Profile Section */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                        <div>
                          <div className="w-20 h-3 bg-white/30 rounded mb-1"></div>
                          <div className="w-16 h-2 bg-white/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Cards */}
                    <div className="space-y-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                        <div className="w-full h-20 bg-white/20 rounded-lg mb-2"></div>
                        <div className="w-24 h-2 bg-white/30 rounded"></div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                        <div className="w-full h-16 bg-white/20 rounded-lg mb-2"></div>
                        <div className="w-20 h-2 bg-white/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
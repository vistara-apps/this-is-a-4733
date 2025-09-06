import React, { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDemoLoading, setIsDemoLoading] = useState(false)

  const handleGetStarted = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      console.log('Navigating to get started...')
    }, 1000)
  }

  const handleWatchDemo = async () => {
    setIsDemoLoading(true)
    setTimeout(() => {
      setIsDemoLoading(false)
      console.log('Opening demo video...')
    }, 800)
  }
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20" aria-label="Hero section">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
              <span className="mr-2">✨</span>
              New: AI-powered style recommendations now available
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Style with
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Fashion
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl">
              Discover your unique aesthetic with personalized style recommendations, connect with fashion enthusiasts, and elevate your wardrobe with our intelligent styling assistant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleGetStarted}
                disabled={isLoading}
                className="flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                aria-label="Get started with StyleSphere AI"
              >
                {isLoading ? 'Loading...' : 'Get Started'}
                {!isLoading && <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />}
              </button>
              
              <button 
                onClick={handleWatchDemo}
                disabled={isDemoLoading}
                className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                aria-label="Watch StyleSphere AI demo video"
              >
                {!isDemoLoading && <Play className="mr-2 w-5 h-5" aria-hidden="true" />}
                {isDemoLoading ? 'Loading...' : 'Watch Demo'}
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

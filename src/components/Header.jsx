import React, { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleGetStarted = async () => {
    setIsLoading(true)
    // Simulate API call or navigation
    setTimeout(() => {
      setIsLoading(false)
      // Here you would typically navigate to signup/onboarding
      console.log('Navigating to get started...')
    }, 1000)
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <header className="relative z-50 px-4 py-6 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg" aria-hidden="true">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-xl font-bold text-white">StyleSphere AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            onClick={(e) => handleSmoothScroll(e, '#features')}
            className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-2 py-1"
            aria-label="Navigate to Features section"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleSmoothScroll(e, '#pricing')}
            className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-2 py-1"
            aria-label="Navigate to Pricing section"
          >
            Pricing
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, '#about')}
            className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-2 py-1"
            aria-label="Navigate to About section"
          >
            About
          </a>
          <button 
            onClick={handleGetStarted}
            disabled={isLoading}
            className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Get started with StyleSphere AI"
          >
            {isLoading ? 'Loading...' : 'Get Started'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-lg border-t border-white/10"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Navigate to Features section"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Navigate to Pricing section"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-2 py-1"
              role="menuitem"
              aria-label="Navigate to About section"
            >
              About
            </a>
            <button 
              onClick={handleGetStarted}
              disabled={isLoading}
              className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              role="menuitem"
              aria-label="Get started with StyleSphere AI"
            >
              {isLoading ? 'Loading...' : 'Get Started'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

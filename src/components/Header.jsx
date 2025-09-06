import React, { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 px-4 py-6 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-xl font-bold text-white">StyleSphere AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
          <button className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-white/90 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <button className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-white/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
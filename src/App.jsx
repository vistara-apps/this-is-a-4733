import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import DeviceShowcase from './components/DeviceShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Header />
        <main>
          <Hero />
          <Features />
          <DeviceShowcase />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App

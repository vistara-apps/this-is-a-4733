import React from 'react'
import { Check, Star } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started with AI styling",
      features: [
        "5 AI style recommendations per day",
        "Basic wardrobe analysis",
        "Community access",
        "Mobile app access"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For fashion enthusiasts who want more",
      features: [
        "Unlimited AI recommendations",
        "Advanced style analytics",
        "Personal style profile",
        "Priority community support",
        "Custom color palette",
        "Trend forecasting"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For businesses and professional stylists",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "API access",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your Style Journey
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Start free and upgrade as your style needs grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative glass-effect rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-white/30 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60 ml-1">{plan.period}</span>
                </div>
                <p className="text-white/80">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-full font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-white text-purple-600 hover:bg-white/90' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing

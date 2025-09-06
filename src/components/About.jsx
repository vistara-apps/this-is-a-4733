import React from 'react'
import { Brain, Users, Zap, Shield } from 'lucide-react'

const About = () => {
  const stats = [
    { number: "1M+", label: "Style Recommendations" },
    { number: "50K+", label: "Active Users" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24/7", label: "AI Availability" }
  ]

  const values = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Our advanced machine learning algorithms analyze millions of fashion combinations to provide personalized recommendations."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Built by fashion enthusiasts, for fashion enthusiasts. Our community shapes the future of AI styling."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant style recommendations with our optimized AI engine that processes requests in milliseconds."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your style preferences and data are protected with enterprise-grade security and privacy measures."
    }
  ]

  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Revolutionizing Fashion with AI
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            StyleSphere AI combines cutting-edge artificial intelligence with deep fashion expertise 
            to help you discover your perfect style. Our mission is to make personalized fashion 
            accessible to everyone, everywhere.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {values.map((value, index) => (
            <div key={index} className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {value.title}
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Built by Fashion & Tech Experts
          </h3>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Our team combines decades of experience in fashion, artificial intelligence, 
            and user experience design to create the most intuitive styling platform.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Team Member Placeholders */}
            {[1, 2, 3].map((member) => (
              <div key={member} className="glass-effect rounded-2xl p-6">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4"></div>
                <div className="w-24 h-4 bg-white/30 rounded mx-auto mb-2"></div>
                <div className="w-20 h-3 bg-white/20 rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Style?
            </h3>
            <p className="text-white/80 mb-6">
              Join thousands of fashion enthusiasts who trust StyleSphere AI 
              for their daily styling needs.
            </p>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-colors">
              Start Your Style Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

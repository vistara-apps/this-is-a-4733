import React from 'react'
import { Wand2, Users, Palette, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI Style Assistant",
      description: "Get personalized style recommendations powered by advanced AI algorithms"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with style enthusiasts and share your favorite looks"
    },
    {
      icon: Palette,
      title: "Endless Creativity",
      description: "Explore unlimited style combinations and find your unique aesthetic"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get style suggestions in seconds with our lightning-fast AI engine"
    }
  ]

  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover what makes StyleSphere AI the ultimate styling companion
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      avatar: "SJ",
      rating: 5,
      text: "StyleSphere AI completely transformed how I approach fashion. The recommendations are spot-on and have helped me discover styles I never would have tried on my own."
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      avatar: "MC",
      rating: 5,
      text: "As someone who travels constantly for work, having an AI stylist in my pocket is invaluable. The app understands my preferences and always suggests appropriate outfits."
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Manager",
      avatar: "ER",
      rating: 5,
      text: "I was skeptical about AI fashion advice, but StyleSphere proved me wrong. It's like having a personal stylist who knows exactly what works for my body type and lifestyle."
    },
    {
      name: "David Kim",
      role: "Entrepreneur",
      avatar: "DK",
      rating: 5,
      text: "The community aspect is fantastic. I love seeing how others style similar pieces and getting inspiration from the StyleSphere community."
    },
    {
      name: "Lisa Thompson",
      role: "Student",
      avatar: "LT",
      rating: 5,
      text: "On a student budget, StyleSphere helps me make the most of my limited wardrobe. The mix-and-match suggestions are creative and budget-friendly."
    },
    {
      name: "James Wilson",
      role: "Software Engineer",
      avatar: "JW",
      rating: 5,
      text: "Finally, an app that understands that I want to look good without spending hours thinking about what to wear. The AI recommendations are consistently great."
    }
  ]

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Loved by Fashion Enthusiasts
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See what our community is saying about their StyleSphere AI experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/20" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-white/60 text-sm">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50K+</div>
                <div className="text-white/60 text-sm">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1M+</div>
                <div className="text-white/60 text-sm">Outfits Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">99%</div>
                <div className="text-white/60 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

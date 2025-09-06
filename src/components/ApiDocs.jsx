import React, { useState } from 'react'
import { Code, Copy, Check, ExternalLink } from 'lucide-react'

const ApiDocs = () => {
  const [copiedCode, setCopiedCode] = useState(null)

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(index)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const endpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/recommendations",
      description: "Get AI-powered style recommendations",
      code: `curl -X POST https://api.stylesphere.ai/v1/recommendations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "user123",
    "preferences": {
      "style": "casual",
      "colors": ["blue", "white"],
      "occasion": "work"
    },
    "wardrobe_items": ["jeans", "blazer", "sneakers"]
  }'`
    },
    {
      method: "GET",
      endpoint: "/api/v1/trends",
      description: "Fetch current fashion trends",
      code: `curl -X GET https://api.stylesphere.ai/v1/trends \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -G -d "category=casual" -d "season=spring"`
    },
    {
      method: "POST",
      endpoint: "/api/v1/wardrobe/analyze",
      description: "Analyze wardrobe compatibility",
      code: `curl -X POST https://api.stylesphere.ai/v1/wardrobe/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "items": [
      {"type": "shirt", "color": "blue", "style": "casual"},
      {"type": "pants", "color": "black", "style": "formal"}
    ]
  }'`
    }
  ]

  const features = [
    {
      title: "Style Recommendations",
      description: "Get personalized outfit suggestions based on user preferences, weather, and occasion."
    },
    {
      title: "Trend Analysis",
      description: "Access real-time fashion trends and seasonal recommendations."
    },
    {
      title: "Wardrobe Management",
      description: "Analyze and organize digital wardrobes with compatibility scoring."
    },
    {
      title: "Color Matching",
      description: "Advanced color theory algorithms for perfect color combinations."
    },
    {
      title: "Occasion Styling",
      description: "Context-aware styling for different events and environments."
    },
    {
      title: "Brand Integration",
      description: "Connect with fashion retailers and brands for seamless shopping."
    }
  ]

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Developer API
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Integrate StyleSphere AI into your applications with our powerful REST API
          </p>
        </div>

        {/* API Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* API Endpoints */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            API Endpoints
          </h3>
          
          {endpoints.map((endpoint, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-white font-mono">
                    {endpoint.endpoint}
                  </code>
                </div>
                <button
                  onClick={() => copyToClipboard(endpoint.code, index)}
                  className="flex items-center space-x-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {copiedCode === index ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/60" />
                  )}
                  <span className="text-sm text-white/80">
                    {copiedCode === index ? 'Copied!' : 'Copy'}
                  </span>
                </button>
              </div>
              
              <p className="text-white/80 mb-4">
                {endpoint.description}
              </p>
              
              <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                  {endpoint.code}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Getting Started */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mb-6">
              Get your API key and start building amazing fashion experiences today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Get API Key
                <ExternalLink className="ml-2 w-4 h-4" />
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors">
                View Documentation
                <ExternalLink className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApiDocs

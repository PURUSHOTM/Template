import { useState } from 'react';
import { Globe, Package, Shield, Zap, ArrowRight, Menu, X, Check, BarChart3, FileText, Anchor, Plane, Truck, Ship, Clock, DollarSign, Users, ChevronRight } from 'lucide-react';

const themes = {
  navy: {
    primary: 'bg-[#1e3a8a]',
    primaryHover: 'hover:bg-[#1e40af]',
    primaryText: 'text-[#1e3a8a]',
    gradient: 'from-[#1e3a8a] to-[#3b82f6]',
    accent: 'bg-[#3b82f6]',
    light: 'bg-blue-50',
    name: 'Navy Professional'
  },
  teal: {
    primary: 'bg-[#0f766e]',
    primaryHover: 'hover:bg-[#115e59]',
    primaryText: 'text-[#0f766e]',
    gradient: 'from-[#0f766e] to-[#14b8a6]',
    accent: 'bg-[#14b8a6]',
    light: 'bg-teal-50',
    name: 'Teal Corporate'
  },
  burgundy: {
    primary: 'bg-[#881337]',
    primaryHover: 'hover:bg-[#9f1239]',
    primaryText: 'text-[#881337]',
    gradient: 'from-[#881337] to-[#be123c]',
    accent: 'bg-[#be123c]',
    light: 'bg-rose-50',
    name: 'Burgundy Executive'
  },
  charcoal: {
    primary: 'bg-[#374151]',
    primaryHover: 'hover:bg-[#1f2937]',
    primaryText: 'text-[#374151]',
    gradient: 'from-[#374151] to-[#6b7280]',
    accent: 'bg-[#6b7280]',
    light: 'bg-gray-50',
    name: 'Charcoal Modern'
  },
  olive: {
    primary: 'bg-[#65a30d]',
    primaryHover: 'hover:bg-[#4d7c0f]',
    primaryText: 'text-[#65a30d]',
    gradient: 'from-[#65a30d] to-[#84cc16]',
    accent: 'bg-[#84cc16]',
    light: 'bg-lime-50',
    name: 'Olive Business'
  },
  indigo: {
    primary: 'bg-[#4338ca]',
    primaryHover: 'hover:bg-[#3730a3]',
    primaryText: 'text-[#4338ca]',
    gradient: 'from-[#4338ca] to-[#6366f1]',
    accent: 'bg-[#6366f1]',
    light: 'bg-indigo-50',
    name: 'Indigo Tech'
  },
  slate: {
    primary: 'bg-[#475569]',
    primaryHover: 'hover:bg-[#334155]',
    primaryText: 'text-[#475569]',
    gradient: 'from-[#475569] to-[#64748b]',
    accent: 'bg-[#64748b]',
    light: 'bg-slate-50',
    name: 'Slate Premium'
  },
  forest: {
    primary: 'bg-[#166534]',
    primaryHover: 'hover:bg-[#14532d]',
    primaryText: 'text-[#166534]',
    gradient: 'from-[#166534] to-[#22c55e]',
    accent: 'bg-[#22c55e]',
    light: 'bg-green-50',
    name: 'Forest Sustainable'
  }
};

export default function TradePlatformLanding() {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>('navy');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = themes[currentTheme];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Rate Quotes",
      description: "Access real-time freight rates from 500+ carriers across air, ocean, and land. Compare pricing instantly and make data-driven shipping decisions."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Smart Cargo Tracking",
      description: "Track shipments with AI-powered predictions and real-time GPS monitoring. Get proactive alerts for potential delays before they happen."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Digital Documentation",
      description: "Automate customs paperwork, bills of lading, and certificates of origin. Reduce documentation time by 80% with intelligent pre-filling."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cargo Insurance",
      description: "Comprehensive cargo protection with instant quote and policy issuance. Claims processed in 48 hours with 99.2% approval rate."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Advanced reporting dashboard with freight spend analysis, route optimization, and carrier performance metrics for smarter decisions."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Connect to 2,500+ ports and airports in 200+ countries. Leverage our partnerships with top-tier carriers for reliable service."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Flexible Payment",
      description: "Pay online instantly or access net-30/60/90 payment terms. Multi-currency support with competitive FX rates for international transactions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "24/7 multilingual customer support with assigned account managers for enterprise clients. Average response time under 5 minutes."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Express Services",
      description: "Time-critical shipment handling with priority booking and expedited customs clearance. Door-to-door delivery tracking included."
    }
  ];

  const steps = [
    { 
      number: "1", 
      title: "Get Instant Quotes", 
      description: "Enter shipment details including origin, destination, cargo type, and dimensions. Our AI engine compares 500+ carriers to find optimal routes and pricing."
    },
    { 
      number: "2", 
      title: "Book & Confirm", 
      description: "Select your preferred shipping option with transparent all-inclusive pricing. Receive instant booking confirmation with complete shipment documentation."
    },
    { 
      number: "3", 
      title: "Track Progress", 
      description: "Monitor your cargo in real-time with GPS tracking, milestone updates, and predictive ETA. Receive proactive notifications for any exceptions."
    },
    { 
      number: "4", 
      title: "Complete & Review", 
      description: "Get delivery confirmation with digital proof of delivery. Review shipment performance and rate your experience to help us improve."
    }
  ];

  const services = [
    { icon: <Ship className="w-8 h-8" />, title: "Ocean Freight", desc: "FCL & LCL" },
    { icon: <Plane className="w-8 h-8" />, title: "Air Freight", desc: "Express & Standard" },
    { icon: <Truck className="w-8 h-8" />, title: "Land Transport", desc: "FTL & LTL" },
    { icon: <Anchor className="w-8 h-8" />, title: "Customs Brokerage", desc: "Full Compliance" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Supply Chain Director, TechFlow Inc",
      content: "Switching to this platform reduced our shipping costs by 32% in the first quarter. The real-time tracking and automated documentation saved our team countless hours.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Logistics Manager, Global Traders Ltd",
      content: "The customer support is exceptional. Our dedicated account manager helped optimize our routes and negotiate better rates. Highly recommended for businesses of any size.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "CEO, ExportPro Solutions",
      content: "Best decision we made for our export business. The platform is intuitive, rates are competitive, and the analytics help us make smarter shipping decisions every day.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "0",
      period: "Free Forever",
      description: "Perfect for small businesses getting started with international shipping",
      features: [
        "Up to 10 shipments/month",
        "Real-time rate comparison",
        "Basic tracking & notifications",
        "Email support (48hr response)",
        "Standard documentation",
        "Access to carrier network"
      ]
    },
    {
      name: "Professional",
      price: "149",
      period: "per month",
      description: "Ideal for growing businesses with regular shipping needs",
      features: [
        "Up to 100 shipments/month",
        "Priority rate access",
        "Advanced tracking with AI predictions",
        "Priority support (4hr response)",
        "Automated customs documentation",
        "API access & integrations",
        "Cargo insurance included",
        "Analytics dashboard",
        "Multi-user accounts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Tailored Pricing",
      description: "Comprehensive solution for high-volume shippers and logistics providers",
      features: [
        "Unlimited shipments",
        "Negotiated carrier rates",
        "White-label platform option",
        "Dedicated account manager",
        "24/7 phone & chat support",
        "Custom API & integrations",
        "Advanced analytics & BI tools",
        "Contract management",
        "Training & onboarding",
        "SLA guarantees"
      ]
    }
  ];

  const stats = [
    { value: "200+", label: "Countries Covered" },
    { value: "2,500+", label: "Ports & Airports" },
    { value: "500K+", label: "Shipments Completed" },
    { value: "98.7%", label: "On-Time Delivery" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "$2.5B+", label: "Cargo Value Handled" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Theme Selector */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
        <p className="text-xs font-semibold text-gray-700 mb-3">Choose Theme</p>
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(themes).map(([key, t]) => (
            <button
              key={key}
              onClick={() => setCurrentTheme(key as keyof typeof themes)}
              className={`w-10 h-10 rounded-lg ${t.primary} ${currentTheme === key ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : 'hover:scale-105'} transition-transform`}
              title={t.name}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">{themes[currentTheme].name}</p>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className={`w-8 h-8 ${theme.primaryText}`} />
              <span className="ml-2 text-xl font-bold text-gray-900">TradeFlow Global</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition">Services</a>
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition">About</a>
              <button className="text-gray-700 hover:text-gray-900 transition font-medium">Sign In</button>
              <button className={`${theme.primary} ${theme.primaryHover} text-white px-6 py-2 rounded-lg font-medium transition shadow-sm`}>
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 py-2">Services</a>
              <a href="#features" className="block text-gray-700 py-2">Features</a>
              <a href="#how-it-works" className="block text-gray-700 py-2">How It Works</a>
              <a href="#pricing" className="block text-gray-700 py-2">Pricing</a>
              <a href="#" className="block text-gray-700 py-2">About</a>
              <button className="text-gray-700 font-medium w-full text-left py-2">Sign In</button>
              <button className={`${theme.primary} text-white px-6 py-2 rounded-lg font-medium w-full`}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${theme.gradient} text-white py-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                🌍 Trusted by 10,000+ businesses worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ship Globally with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              The intelligent freight platform connecting businesses to 500+ carriers worldwide. Get instant quotes, book in seconds, and track every mile with AI-powered visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition flex items-center justify-center shadow-lg hover:shadow-xl">
                Start Shipping Free <ArrowRight className="ml-2" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition border border-white/30">
                Schedule Demo
              </button>
            </div>
            <p className="text-white/80 text-sm">No credit card required • 10 free shipments • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group cursor-default">
                <div className={`text-4xl md:text-5xl font-bold ${theme.primaryText} group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className={`py-20 ${theme.light}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ocean freight to last-mile delivery, we handle every aspect of your global supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition group cursor-pointer">
                <div className={`${theme.primary} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#" className={`${theme.primaryText} font-medium flex items-center hover:gap-2 transition-all`}>
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Trade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade technology designed to simplify complex logistics operations and drive efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:border-gray-300 transition group">
                <div className={`${theme.primary} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={`py-20 ${theme.light}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shipping Made Simple in 4 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quote to delivery, our streamlined process ensures your cargo moves efficiently across borders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition relative">
                <div className={`${theme.primary} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients say about transforming their logistics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 ${theme.light}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transparent Pricing for Every Business Size
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees. No surprises. Choose a plan that scales with your shipping volume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl border-2 ${plan.popular ? `border-current ${theme.primaryText} shadow-2xl scale-105` : 'border-gray-200'} relative`}>
                {plan.popular && (
                  <div className={`${theme.primary} text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4 absolute -top-4 left-1/2 transform -translate-x-1/2`}>
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6 h-12">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-5 h-5 ${theme.primaryText} mr-3 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.popular ? `${theme.primary} text-white ${theme.primaryHover}` : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} py-4 rounded-xl font-semibold transition text-lg shadow-sm`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12">
            All plans include SSL encryption, data backups, and GDPR compliance • <a href="#" className={`${theme.primaryText} font-medium hover:underline`}>Compare all features →</a>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${theme.gradient} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Global Trade Operations?
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Join 10,000+ businesses already shipping smarter with TradeFlow Global. Start with 10 free shipments, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-xl flex items-center justify-center">
              Get Started Free <ArrowRight className="ml-2" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition border-2 border-white/30">
              Talk to Sales
            </button>
          </div>
          <div className="flex items-center justify-center gap-8 mt-10 text-white/80 text-sm">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              No credit card
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              10 free shipments
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8" />
                <span className="ml-2 text-xl font-bold">TradeFlow Global</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The intelligent freight platform empowering businesses to ship globally with confidence. Trusted by 10,000+ companies worldwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition">Release Notes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Ocean Freight</a></li>
                <li><a href="#" className="hover:text-white transition">Air Freight</a></li>
                <li><a href="#" className="hover:text-white transition">Land Transport</a></li>
                <li><a href="#" className="hover:text-white transition">Customs Brokerage</a></li>
                <li><a href="#" className="hover:text-white transition">Warehousing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">System Status</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TradeFlow Global. All rights reserved. | ISO 9001:2015 Certified
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23ffffff;stop-opacity:0.1%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23ffffff;stop-opacity:0%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/%3E%3Cpath fill=%22%23ffffff%22 opacity=%220.05%22 d=%22M600 100L800 300L600 500L400 300Z%22/%3E%3Ccircle cx=%22300%22 cy=%22150%22 r=%2280%22 fill=%22%23ffffff%22 opacity=%220.03%22/%3E%3Ccircle cx=%22900%22 cy=%22450%22 r=%22100%22 fill=%22%23ffffff%22 opacity=%220.03%22/%3E%3C/svg%3E')"
          }}
        ></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-blue-900/50 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 mt-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white">Available 24/7 for Emergency Service</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
              Your Comfort,
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-blue-400">Our Priority</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Indianapolis's most trusted HVAC experts. Professional installation, repair & maintenance with a 10-year warranty. Free estimates & price matching guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="tel:+13175551234"
                className="group relative bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-2xl hover:shadow-orange-500/50 hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (317) 555-1234
                </span>
              </a>
              <a
                href="#contact"
                className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-xl text-lg font-bold transition-all hover:scale-105 w-full sm:w-auto"
              >
                Get Free Estimate
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatCard number="15+" label="Years Experience" />
              <StatCard number="10K+" label="Happy Customers" />
              <StatCard number="24/7" label="Emergency Service" />
              <StatCard number="A+" label="BBB Rating" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Complete HVAC Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From installation to emergency repairs, we've got you covered 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="HVAC Installation & Repair"
              description="Expert installation, repair, and maintenance for all your heating, cooling, and ventilation needs."
              gradient="from-blue-500 to-cyan-500"
            />
            <ServiceCard
              title="Ductless Systems"
              description="Energy-efficient ductless heating and cooling solutions for any space."
              gradient="from-cyan-500 to-teal-500"
            />
            <ServiceCard
              title="Tankless Water Heaters"
              description="Endless hot water with energy-efficient tankless water heater installations."
              gradient="from-orange-500 to-red-500"
            />
            <ServiceCard
              title="Duct Cleaning & Sanitation"
              description="HEPA-filtered duct cleaning to improve your indoor air quality."
              gradient="from-green-500 to-emerald-500"
            />
            <ServiceCard
              title="Whole-Home Generators"
              description="Never lose power with our professional generator installation services."
              gradient="from-yellow-500 to-orange-500"
            />
            <ServiceCard
              title="24/7 Emergency Service"
              description="Round-the-clock emergency repairs when you need us most."
              gradient="from-red-500 to-pink-500"
            />
          </div>
        </div>
      </section>

      {/* Pricing/Estimates Section */}
      <section id="pricing" className="py-24 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ESTIMATES
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Free, No-Obligation Estimates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Every home and business is unique. That's why we provide customized estimates tailored to your specific needs and budget.
            </p>
            <p className="text-lg text-blue-600 font-semibold">
              We guarantee to match any competitor's written estimate!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-full bg-blue-100 mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Service & Repair</h3>
                <p className="text-gray-600">Typical range varies by issue</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Free diagnostic with repair
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Upfront pricing before work begins
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Parts & labor warranty included
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                Request Estimate
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST REQUESTED
              </div>
              <div className="text-center mb-6 mt-2">
                <div className="inline-flex p-4 rounded-full bg-blue-100 mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">New Installation</h3>
                <p className="text-gray-600">Custom quote based on home</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Free in-home assessment
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  10-year labor warranty
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Financing options available
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors shadow-lg">
                Get Free Quote
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-full bg-blue-100 mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Maintenance Plans</h3>
                <p className="text-gray-600">Keep your system running efficiently</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Annual or seasonal tune-ups
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Priority scheduling for members
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Discounts on repairs & parts
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                Learn More
              </a>
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our Estimates Stand Out</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-blue-600 font-black text-3xl mb-2">100%</div>
                <div className="text-gray-700 font-semibold">Free & No Obligation</div>
              </div>
              <div>
                <div className="text-blue-600 font-black text-3xl mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Emergency Availability</div>
              </div>
              <div>
                <div className="text-blue-600 font-black text-3xl mb-2">Same Day</div>
                <div className="text-gray-700 font-semibold">Service When Possible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard
              name="Sarah Johnson"
              rating={5}
              review="Absolutely outstanding service! They installed our new HVAC system in one day and the team was professional and courteous. Highly recommend!"
              platform="Yelp"
            />
            <ReviewCard
              name="Mike Peterson"
              rating={5}
              review="Called them for an emergency repair at 2 AM and they were here within the hour. Fixed the issue quickly and price was very fair. True professionals!"
              platform="Google"
            />
            <ReviewCard
              name="Jennifer Martinez"
              rating={5}
              review="Best HVAC company in Indianapolis! They matched a competitor's quote and their 10-year warranty gave us complete peace of mind."
              platform="Angie's List"
            />
          </div>

          <div className="flex justify-center gap-8 mt-16 flex-wrap">
            <ReviewBadge platform="BBB" rating="A+" />
            <ReviewBadge platform="Yelp" rating="4.9/5" />
            <ReviewBadge platform="Google" rating="4.8/5" />
            <ReviewBadge platform="Angie's List" rating="A" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Why Choose Comfort Crew?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're not just another HVAC company - we're your comfort partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Price Match Guarantee"
              description="We match any competitor's written estimate"
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="10-Year Warranty"
              description="Industry-leading warranty on all installations"
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="24/7 Emergency"
              description="Round-the-clock service when you need it most"
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Licensed & Insured"
              description="Fully certified professionals you can trust"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers!
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="How quickly can you respond to an emergency?"
              answer="We offer 24/7 emergency service and aim to respond within 1-2 hours for urgent calls. Our team is always ready to help when you need us most."
            />
            <FAQItem
              question="Do you offer financing options for new installations?"
              answer="Yes! We offer flexible financing options to make your new HVAC system affordable. Ask us about our current financing promotions and payment plans."
            />
            <FAQItem
              question="How often should I have my HVAC system serviced?"
              answer="We recommend professional maintenance twice a year—once before the cooling season and once before the heating season. Regular maintenance extends your system's life and improves efficiency."
            />
            <FAQItem
              question="What brands do you install and service?"
              answer="We work with all major HVAC brands including Carrier, Trane, Lennox, Rheem, and more. Our technicians are trained and certified to service any brand."
            />
            <FAQItem
              question="Is your estimate really free with no obligation?"
              answer="Absolutely! We provide completely free, no-obligation estimates for all installations and major repairs. Plus, we'll match any competitor's written estimate."
            />
            <FAQItem
              question="What areas do you serve?"
              answer="We proudly serve Indianapolis and all of Central Indiana including surrounding communities. Call us to confirm service in your area."
            />
            <FAQItem
              question="What makes your 10-year warranty different?"
              answer="Unlike many competitors who only offer manufacturer warranties, we back our work with a 10-year labor warranty on new installations—giving you true peace of mind."
            />
          </div>

          <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-6">Our friendly team is here to help!</p>
            <a href="tel:+13175551234" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
              Call Us: (317) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section with Lead Form */}
      <section id="contact" className="py-24 bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Fill out the form below or call us directly. We'll respond within 24 hours!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Estimate</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                    placeholder="(317) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                  >
                    <option value="">Select a service...</option>
                    <option value="new-installation">New Installation</option>
                    <option value="repair">Repair Service</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 resize-none"
                    placeholder="Tell us more about what you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get My Free Estimate
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by Comfort Crew. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+13175551234" className="text-blue-200 hover:text-white transition-colors">
                        (317) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-blue-200">
                        6650 Wandering Way<br />
                        Indianapolis, IN 46241
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-blue-200">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Emergency Service: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Emergency Service?</h3>
                <p className="mb-6">
                  If you're experiencing an HVAC emergency, don't wait! Call us now for immediate assistance.
                </p>
                <a
                  href="tel:+13175551234"
                  className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 w-full text-center"
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-black text-white mb-2">{number}</div>
      <div className="text-sm sm:text-base text-blue-200 font-medium">{label}</div>
    </div>
  );
}

function ServiceCard({ title, description, gradient }: { title: string; description: string; gradient: string }) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-linear-to-r ${gradient}`}></div>
      <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${gradient} mb-6`}>
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, description, features, popular }: { name: string; price: string; description: string; features: string[]; popular: boolean }) {
  return (
    <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${popular ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-105'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          MOST POPULAR
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-black text-blue-600 mb-2">{price}</div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`block text-center py-4 px-6 rounded-xl font-bold transition-all ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ReviewCard({ name, rating, review, platform }: { name: string; rating: number; review: string; platform: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{review}"</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">Verified Customer</div>
        </div>
        <div className="text-sm font-semibold text-blue-600">{platform}</div>
      </div>
    </div>
  );
}

function ReviewBadge({ platform, rating }: { platform: string; rating: string }) {
  return (
    <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md">
      <div className="font-bold text-gray-900">{platform}</div>
      <div className="text-2xl font-black text-blue-600">{rating}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center group">
      <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 group-hover:bg-white/20 transition-colors">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 transition-colors">
      <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg list-none">
        <span>{question}</span>
        <svg
          className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-gray-700 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

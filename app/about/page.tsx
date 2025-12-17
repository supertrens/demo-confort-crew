import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ABOUT US
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              Brandon Casey's
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-200 via-white to-blue-200">Comfort Crew</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been Indianapolis's trusted name in HVAC excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                OUR STORY
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                Built on Trust & Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded by Brandon Casey in 2009, Comfort Crew Heating & Air Conditioning was built on a simple but powerful promise: to deliver exceptional comfort solutions with unwavering integrity and professionalism.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a one-man operation has grown into Indianapolis's most trusted HVAC company, serving over 10,000 satisfied customers throughout Central Indiana. Our growth hasn't been by accident—it's the result of treating every customer like family and standing behind our work with industry-leading warranties.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We're not just technicians—we're your neighbors, your partners in comfort, and your trusted advisors when it comes to keeping your home or business at the perfect temperature year-round.
              </p>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-8">
                  To provide Central Indiana with the highest quality HVAC services, delivered with honesty, professionalism, and a commitment to customer satisfaction that goes beyond the job.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-3xl font-black text-white mb-2">15+</div>
                    <div className="text-sm font-semibold text-blue-100">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-3xl font-black text-white mb-2">10K+</div>
                    <div className="text-sm font-semibold text-blue-100">Happy Customers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-3xl font-black text-white mb-2">A+</div>
                    <div className="text-sm font-semibold text-blue-100">BBB Rating</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-3xl font-black text-white mb-2">100%</div>
                    <div className="text-sm font-semibold text-blue-100">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHAT SETS US APART
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by our commitment to your comfort and satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CommitmentCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Licensed, Insured & Certified"
              description="All our technicians are fully licensed, insured, and certified professionals. You can trust that your home is in capable, qualified hands."
            />
            <CommitmentCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Upfront, Honest Pricing"
              description="No surprises, no hidden fees. We provide clear, upfront pricing before any work begins, and we guarantee to match any competitor's written estimate."
            />
            <CommitmentCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Same-Day Service Available"
              description="We understand that HVAC emergencies don't wait. That's why we offer same-day service for emergencies and work around your schedule."
            />
            <CommitmentCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="10-Year Labor Warranty"
              description="Unlike many competitors who only offer manufacturer warranties, we back our work with a 10-year labor warranty on new installations."
            />
            <CommitmentCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="100% Satisfaction Guarantee"
              description="Your satisfaction is our top priority. If you're not completely happy with our work, we'll make it right—guaranteed."
            />
            <CommitmentCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Locally Owned & Operated"
              description="We're part of your community. As a locally owned business, we understand the unique climate challenges of Central Indiana."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              THE COMFORT CREW DIFFERENCE
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Why Homeowners Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <DifferenceCard
              number="01"
              title="Experience You Can Trust"
              description="With over 15 years in the business and thousands of satisfied customers, we've seen it all. Our experienced team can handle any HVAC challenge."
            />
            <DifferenceCard
              number="02"
              title="Transparent Communication"
              description="We explain everything in plain English—no confusing jargon. You'll always know exactly what we're doing and why."
            />
            <DifferenceCard
              number="03"
              title="Quality Equipment"
              description="We only install top-rated, energy-efficient equipment from trusted manufacturers, backed by comprehensive warranties."
            />
            <DifferenceCard
              number="04"
              title="Ongoing Support"
              description="Our relationship doesn't end after installation. We're here for maintenance, questions, and support whenever you need us."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Experience the Comfort Crew Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of satisfied customers who trust us with their comfort. Get your free, no-obligation estimate today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13175551234"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-2xl hover:shadow-orange-500/50 hover:scale-105"
            >
              Call (317) 555-1234
            </a>
            <a
              href="/#contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-xl text-lg font-bold transition-all hover:scale-105"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CommitmentCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
      <div className="inline-flex p-3 rounded-xl bg-blue-100 text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function DifferenceCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100">
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-linear-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-2xl font-black text-white">{number}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

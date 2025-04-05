import Image from "next/image"
import { Check } from "lucide-react"

export default function Services() {
  return (
    <>
      {/* Services Hero */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive web solutions to help your business succeed online.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Web Design</h2>
              <p className="text-gray-600 mb-6">
                Our web design services focus on creating visually appealing, user-friendly websites that reflect your
                brand identity and engage your visitors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Custom design tailored to your brand</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Responsive layouts for all devices</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>User experience (UX) optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Wireframing and prototyping</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] w-full order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Web Design"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[300px] w-full">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Web Development"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Web Development</h2>
              <p className="text-gray-600 mb-6">
                Our development team builds robust, scalable websites using the latest technologies and best practices
                to ensure optimal performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Custom website development</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Content management systems (CMS)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>API integration and development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">SEO & Digital Marketing</h2>
              <p className="text-gray-600 mb-6">
                We help improve your website's visibility in search engines and implement effective digital marketing
                strategies to drive traffic and conversions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Search engine optimization (SEO)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Content strategy and creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Social media marketing</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Analytics and performance tracking</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] w-full order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="SEO & Digital Marketing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Pricing</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose the package that best fits your needs. All our websites are built with modern technologies and best
            practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-gray-500 mb-6">Perfect for small businesses</p>
              <p className="text-4xl font-bold mb-6">€399</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>1-page website</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Basic contact information</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Fast delivery</span>
                </li>
              </ul>
              <button className="w-full py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors rounded">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 shadow-md rounded-lg border-2 border-green-500 transform md:-translate-y-4">
              <div className="bg-green-500 text-white text-center py-1 px-4 rounded text-sm font-medium absolute -mt-10 left-1/2 transform -translate-x-1/2">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Pro Site</h3>
              <p className="text-gray-500 mb-6">For growing businesses</p>
              <p className="text-4xl font-bold mb-6">€699</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Up to 3 pages</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Contact form</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Branding tweaks</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Basic SEO setup</span>
                </li>
              </ul>
              <button className="w-full py-2 bg-green-500 text-white hover:bg-green-600 transition-colors rounded">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-2">Full Brand</h3>
              <p className="text-gray-500 mb-6">Complete online presence</p>
              <p className="text-4xl font-bold mb-6">
                €999<span className="text-xl">+</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>5+ pages</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Custom design</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Logo & brand feel</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Advanced forms & features</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>SEO basics included</span>
                </li>
              </ul>
              <button className="w-full py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors rounded">
                Get Started
              </button>
            </div>
          </div>

          {/* Monthly Care Plan */}
          <div className="mt-16 bg-white p-8 shadow-md rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Monthly Care Plan (Optional)</h3>
            <p className="text-gray-600 mb-6">
              Keep your website secure, up-to-date, and performing at its best with our monthly care plan.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Website hosting</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Regular backups</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Security updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Content changes & updates</span>
                </li>
              </ul>
              <div className="text-center md:text-right">
                <p className="text-gray-600 mb-2">Starting from</p>
                <p className="text-3xl font-bold mb-4">
                  €39 - €79<span className="text-lg">/month</span>
                </p>
                <button className="px-6 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


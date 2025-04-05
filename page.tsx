import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Globe, Zap } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Promo Banner */}
      <div className="bg-green-500 text-white py-3 px-4 text-center">
        <p className="font-medium">
          🚀 Launching now - get your full website from just €399 for a limited time!
          <Link href="/services" className="underline ml-2 font-bold hover:text-green-100">
            Learn more
          </Link>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Desktop computer on desk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">novasite</h1>
          <p className="text-xl mb-8">Professional websites built for you</p>
          <Link
            href="/services"
            className="bg-green-500 text-white px-8 py-3 font-medium hover:bg-green-600 transition-colors"
          >
            VIEW SERVICES
          </Link>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 text-green-500">
                <Globe size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Design</h3>
              <p className="text-gray-600 mb-4">Custom website designs tailored to your brand and business needs.</p>
              <Link href="/services" className="text-green-500 inline-flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 text-green-500">
                <Code size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">Professional development with clean code and modern technologies.</p>
              <Link href="/services" className="text-green-500 inline-flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 text-green-500">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
              <p className="text-gray-600 mb-4">Improve your site's visibility and ranking in search engine results.</p>
              <Link href="/services" className="text-green-500 inline-flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8">Contact us today to discuss your project and get a free quote.</p>
          <Link
            href="/contact"
            className="bg-green-500 text-white px-8 py-3 font-medium hover:bg-green-600 transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </>
  )
}


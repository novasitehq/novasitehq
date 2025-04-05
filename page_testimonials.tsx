import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Hero */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-600">See what our clients have to say about working with us.</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-gray-600 mb-6">
              "Novasite transformed our online presence completely. Their team was professional, responsive, and
              delivered a website that exceeded our expectations. Our conversion rate has increased by 40% since the
              launch!"
            </p>
            <div className="flex items-center">
              <div className="relative h-12 w-12 mr-4 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=48&width=48" alt="Client" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Michael Johnson</h4>
                <p className="text-gray-500 text-sm">CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-gray-600 mb-6">
              "Working with Novasite was a pleasure from start to finish. They took the time to understand our business
              needs and created a website that perfectly represents our brand. I highly recommend their services!"
            </p>
            <div className="flex items-center">
              <div className="relative h-12 w-12 mr-4 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=48&width=48" alt="Client" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Sarah Williams</h4>
                <p className="text-gray-500 text-sm">Marketing Director, Bloom Retail</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-gray-600 mb-6">
              "We needed a website that could handle our complex e-commerce needs, and Novasite delivered. The site is
              fast, user-friendly, and our customers love it. Sales have increased by 25% in the first month alone!"
            </p>
            <div className="flex items-center">
              <div className="relative h-12 w-12 mr-4 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=48&width=48" alt="Client" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold">David Chen</h4>
                <p className="text-gray-500 text-sm">Owner, Artisan Goods</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


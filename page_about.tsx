import Image from "next/image"

export default function About() {
  return (
    <>
      {/* About Hero */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600">We build professional websites that help businesses grow online.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2025, Novasite has been helping businesses establish their online presence with professional,
              custom-built websites that are both beautiful and functional.
            </p>
            <p className="text-gray-600 mb-4">
              As the founder and owner, Robin Loicq works closely with each client to understand their unique needs and
              create websites that reflect their brand identity and help achieve their business goals.
            </p>
            <p className="text-gray-600">
              We believe in creating websites that not only look great but also perform well, are easy to navigate, and
              help convert visitors into customers.
            </p>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Robin Loicq at work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Owner</h2>

          <div className="max-w-2xl mx-auto bg-white p-8 shadow-md text-center">
            <div className="relative h-[200px] w-[200px] mx-auto mb-6 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=200&width=200" alt="Robin Loicq" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Robin Loicq</h3>
            <p className="text-gray-500 mb-4">Founder & Owner</p>
            <p className="text-gray-600 mb-6">
              With a passion for web design and development, Robin has helped numerous businesses transform their online
              presence. Combining technical expertise with an eye for design, Robin creates websites that are both
              visually appealing and highly functional.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-green-500 hover:text-green-600">
                LinkedIn
              </a>
              <a href="#" className="text-green-500 hover:text-green-600">
                Twitter
              </a>
              <a href="mailto:contact@novasitehq.com" className="text-green-500 hover:text-green-600">
                contact@novasitehq.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


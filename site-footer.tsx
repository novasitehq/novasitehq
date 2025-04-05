import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">NOVASITE</h3>
          <p className="text-gray-600 mb-4">Professional websites built for you</p>
          <p className="text-gray-600">© {new Date().getFullYear()} Novasite. All rights reserved.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-gray-600 hover:text-black transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <address className="not-italic text-gray-600">
            <p>Sluizenstraat 119</p>
            <p>8450 Bredene, Belgium</p>
            <p className="mt-2">Email: contact@novasitehq.com</p>
            <p>Phone: +32 498 34 07 89</p>
          </address>
        </div>
      </div>
    </footer>
  )
}


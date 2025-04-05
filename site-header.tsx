"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-6 md:px-16 lg:px-24 bg-white">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">NOVASITE</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-600 transition-colors">
            Services
          </Link>
          <Link href="/testimonials" className="hover:text-gray-600 transition-colors">
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="py-2 hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="py-2 inline-block border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}


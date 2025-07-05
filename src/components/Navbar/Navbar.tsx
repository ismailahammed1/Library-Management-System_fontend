import  { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white shadow sticky top-0 z-50   ">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between ">
        {/* Logo or brand */}
        <div className="text-xl font-bold">BookVerse</div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row md:space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="px-4 py-2 hover:text-blue-600 font-medium transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                
                <NavigationMenuLink asChild>
                  <Link
                    to="/books"
                    className="px-4 py-2 hover:text-blue-600 font-medium transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    All Books
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/create-book"
                    className="px-4 py-2 hover:text-blue-600 font-medium transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    Add Book
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/borrow-summary"
                    className="px-4 py-2 hover:text-blue-600 font-medium transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    Borrow Summary
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

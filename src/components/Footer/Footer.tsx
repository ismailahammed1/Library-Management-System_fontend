import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-muted border-t py-12 mt-10">
      <div className="container mx-auto px-4">
        {/* Main Content - Centered */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Left: Brand/Info */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold text-primary">BookVerse</h2>
            <p className="text-muted-foreground mt-2 max-w-xs">
              Inspiring minds through words. Your trusted book publishing partner.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-2">Navigation</h3>
            <div className="flex flex-col gap-1">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <a href="/books" className="hover:text-primary transition-colors">Books</a>
              <a href="/about" className="hover:text-primary transition-colors">About</a>
              <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Text - Centered */}
        <div className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} BookVerse. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
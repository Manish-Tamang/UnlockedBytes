"use client"

import type React from "react"
import { Karla } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const inter = Karla({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl">UnlockedBytes</span>
            </Link>
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center gap-6 whitespace-nowrap">
                <Link
                  href="/"
                  className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/" ? "text-primary" : ""
                    }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/about" ? "text-primary" : ""
                    }`}
                >
                  About
                </Link>
                <Link
                  href="/request"
                  className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/request" ? "text-primary" : ""
                    }`}
                >
                  Request Game
                </Link>
              </nav>
            </div>
            <div className="hidden md:block">
              <SearchBar />
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t"
              >
                <div className="container py-4 flex flex-col gap-4">
                  <SearchBar />
                  <nav className="flex flex-col gap-2">
                    <Link
                      href="/"
                      className={`text-sm font-medium hover:text-primary p-2 rounded-md hover:bg-muted transition-colors ${pathname === "/" ? "text-primary" : ""
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className={`text-sm font-medium hover:text-primary p-2 rounded-md hover:bg-muted transition-colors ${pathname === "/about" ? "text-primary" : ""
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/request"
                      className={`text-sm font-medium hover:text-primary p-2 rounded-md hover:bg-muted transition-colors ${pathname === "/request" ? "text-primary" : ""
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Request Game
                    </Link>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>{children}</main>

        <footer className="border-t py-6 bg-muted/30">
          <div className="container flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UnlockedBytes.
            </p>
            <p className="text-xs text-muted-foreground">
              This is a wrapper project. All games and download links are scrapped from filecr.com. We do not host any game files ourselves.
            </p>
            <p className="text-xs text-muted-foreground">
              Powered by{" "}
              <a
                href="https://Filecr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Filecr.com
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

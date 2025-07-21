'use client';

import React, { useState, useEffect } from "react";
import {  Menu, MenuItem } from '../ui/navbar-menu';
import { cn } from "../../lib/utils";
import { useTheme } from "next-themes";
import { Moon, Sun, AlignRight, X } from "lucide-react"
import Link from "next/link";
import { usePathname } from 'next/navigation'




function Navbar({className}: {className?: string}) {
  const [active, setActive] = useState<string | null>(null);
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  },[])
  // if (!mounted) return null 

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]
  
  return (
    <>
    
    <div
      className={cn("hidden sm:block sm:fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
    <Menu setActive={setActive}>
      <Link href='#'>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
      </Link>
      <Link href='#about' passHref>
        <MenuItem setActive={setActive} active={active} item="About">
        </MenuItem>
      </Link>

      <Link href='#projects' passHref>
        <MenuItem setActive={setActive} active={active} item="Projects">
        </MenuItem>
      </Link>
      <Link href='#contact'>
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
      </Link>
        
      <button className="px-2" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
           {mounted ? (
              theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />
                ) : (
                <Moon className="h-6 w-6" /> // or show a placeholder icon
            )}
      </button>
    </Menu>
    
    </div>

    <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="container flex h-16 items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black dark:text-white">
            Portfolio
          </Link>
          
          <button className="mr-2" onClick={toggleMenu}>
            <AlignRight className="h-8 w-8 text-black dark:text-white" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between bg-white dark:bg-black/90 p-4 border-b border-gray-200">
          {/* <span className="text-lg font-semibold text-gray-800">Menu</span> */}
          <button className="" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
           {mounted ? (
              theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />
                ) : (
                <Moon className="h-6 w-6 opacity-30" /> // or show a placeholder icon
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 rounded-sm text-foreground border border-foreground" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="py-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className={`block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors ${
                    pathname === item.href ? 'bg-gray-100 text-gray-900 border-r-4 border-blue-500' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Spacer to push content below fixed navbar */}
      <div className="lg:hidden h-16" />

    {/* <div className="md:hidden container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Hiren Patel</span>
        </Link>
    <div className="flex md:hidden items-center space-x-4">
      <button className="btn btn-circle text-black dark:text-white bg-white dark:bg-black" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
           {mounted ? (
              theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />
                ) : (
                <Moon className="h-6 w-6 opacity-30" /> // or show a placeholder icon
            )}
      </button>
          <div className=""></div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 pt-8">
                <Link href="#" className="px-2 py-1 text-lg font-medium">
                  Home
                </Link>
                <Link href="#about" className="px-2 py-1 text-lg font-medium">
                  About
                </Link>
                <Link href="#projects" className="px-2 py-1 text-lg font-medium">
                  Projects
                </Link>
                <Link href="#contact" className="px-2 py-1 text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

    </div> */}
    </>
  )
}

export default Navbar
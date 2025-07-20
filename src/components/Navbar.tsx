'use client';

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from '../components/ui/navbar-menu';
import { cn } from "../lib/utils";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button";
import { Menu as MenuIcon } from "lucide-react"



function Navbar({className}: {className?: string}) {
  const [active, setActive] = useState<string | null>(null);
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })
  // if (!mounted) return null 

  
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
        
      <button className="btn btn-circle -mt-2 text-black dark:text-white bg-white dark:bg-black" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
           {mounted ? (
              theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />
                ) : (
                <Moon className="h-6 w-6 opacity-30" /> // or show a placeholder icon
            )}
      </button>
    </Menu>
    
    </div>

    <div className="md:hidden container flex h-16 items-center justify-between py-4">
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

    </div>
    </>
  )
}

export default Navbar
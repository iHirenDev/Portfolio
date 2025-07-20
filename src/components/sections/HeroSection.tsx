'use client'

import React, {useRef, useEffect, useState} from 'react'
import { Button as CustomButton } from '../ui/button'
import { Github, ArrowDownCircle, Linkedin } from 'lucide-react'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mounted, setMounted] = useState(false)

  useEffect(() => {

    setMounted(true)
    const handleScroll = () => {
      if (bgRef.current && containerRef.current) {
        const scrollY = window.scrollY
        const containerHeight = containerRef.current.offsetHeight
        const opacity = 1 - Math.min(scrollY / (containerHeight * 0.5), 1)
        const translateY = scrollY * 0.5
        
        bgRef.current.style.opacity = opacity.toString()
        bgRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  

  return (
   <div 
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background/10 dark:from-transparent dark:via-primary/10 dark:to-background/20 transition-opacity duration-300"
      />
      
      {/* Content */}
      <div className="container px-4 flex flex-col items-center justify-center relative z-10 py-40">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-6">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter ">
                  {`<Designer/>`}
            </h1>
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter ">
                  {`<Developer/>`}
            </h1>
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter ">
                  {`<Problem Solver/>`}
            </h1>

            <div className='hidden lg:flex flex-row'>
              <p className='text-2xl font-semibold mr-2'>Hi, I am Hiren. I am </p>
             <div className='text-2xl text-foreground font-semibold'>
              <Typewriter
              options={{
                strings: ['Frontend Developer.', 'Mobile Developer.'],
                autoStart: true,
                loop: true,
                cursor: '|',
              }}
            />
            </div>
            </div>
            <p className="text-xl font-semibold max-w-md">
                  I build exceptional and accessible digital experiences 
                  for the web.
            </p>

            <div className="flex flex-row gap-4 sm:gap-20 pt-4">
              
             {/* <a href="https://github.com/iHirenDev" target='_blank' rel='noreferrer'>
                <Button
                  borderRadius="1.75rem"
                  className='text-xl font-bold text-foreground bg-foreground'
                >
                  <Github className='mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300' />
                  Github
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/ihirenpatel/" target='_blank' rel='noreferrer'>
                <Button
                  borderRadius="1.75rem"
                  className='text-xl font-bold text-foreground bg-foreground'
                >
                  <Linkedin className='mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300' />
                  LinkedIn
                </Button>
              </a> */}

              <CustomButton 
                variant="outline" 
                size="lg"
                className="group"
                asChild
              >
                <a href="https://github.com/iHirenDev" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  View GitHub
                </a>
              </CustomButton>

              <CustomButton 
                variant="outline" 
                size="lg"
                className="group bg-blue-500 text-white hover:bg-blue-600"
                asChild
              >
                <a href="https://www.linkedin.com/in/ihirenpatel/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Visit LinkedIn
                </a>
              </CustomButton>
            </div>
          </div>
          
          <div className='hidden md:block -mt-20'>
            
            <div className="relative order-first md:order-last flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-gray-600 shadow-2xl animate-fadeIn">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/80">
              <Image 
                src="https://avatars.githubusercontent.com/u/6905075?v=4" 
                alt="Github" 
                height={350}
                width={350}
                className="object-contain rounded-full" />

                {/* <div className='flex flex-col justify-center items-center text-4xl font-bold text-foreground'>
                <h1 className='text-center'>Hi,
                    <br />
                    I am Hiren
                </h1>
                
                  <Typewriter           
                    options={{
                      
                      strings: ['Frontend', 'Mobile'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  <h2>Developer</h2>
                  </div> */}
                
              </div>
              </div>
            </div>
          </div>

          {/* <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <img
                src={`/jordans.webp`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
            </BackgroundGradient>
      </div> */}

          </div>
        </div>
        

        {/* Scroll down indicator */}
        <CustomButton 
          variant="ghost" 
          size="icon" 
          className="relative top-6 transform -translate-x-1/2 animate-bounce" 
          onClick={scrollToContent}
        >
          <ArrowDownCircle className="h-10 w-10 text-zinc-900 dark:text-gray-500" />
          <span className="sr-only">Scroll down</span>
        </CustomButton>
      </div>
    </div>
  )
}

export default HeroSection
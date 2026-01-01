import Image from 'next/image'
import React from 'react'

function AboutSection() {
  return (
    <section id='about'>
      <div className=''>
        <div className='flex flex-col text-center items-center justify-center text-4xl font-bold'>
          <h2>{`<About Me/>`}</h2>
          <p className="text-foreground text-lg max-w-6xl">
                Learn more about my journey, experience, and approach to software development.
        </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-2'>
          {/* <h2 className='text-2xl font-bold underline'>A bit about me</h2> */}
          <div className='px-2'>
          <p className='mt-4 text-justify text-lg'>Front-End and Mobile Application Developer with experience in React, React Native, Flutter, and Next.js. I have a Master's degree in ICT from Western Sydney University. I have built web and mobile applications that involve API integration, authentication, state management, and responsive UI development.
</p>
          <p className='mt-4 text-justify text-lg'>
            I am eager to grow my career in the IT industry and enjoy learning new tools and technologies. Along with my technical skills, I have over nine years of customer service experience in Australia. This background has improved my communication skills and user-focused approach.
            <br/> <br/> 
           I regularly use modern AI tools like ChatGPT, Claude AI, and Kiro IDE to boost development efficiency, debugging, and learning. I take full responsibility for writing clean, maintainable, production-ready code.

</p>
        </div>
        <div className="mt-2 relative order-first lg:order-last">
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image 
                src="/coding.jpg" 
                alt="Developer at work"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-primary/20 backdrop-blur-sm" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-secondary/20 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
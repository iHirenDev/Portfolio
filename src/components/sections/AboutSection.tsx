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
          <p className='mt-4 text-justify text-lg'>I am a self-taught frontend developer and mobile app developer. I have a passion for creating visually appealing and user-friendly mobile applications and websites.</p>
          <p className='mt-4 text-justify text-lg'>
            With a Master’s degree in Information and Communication Technology from Western Sydney University and a strong passion for software development, I have built expertise in React, React Native, Flutter, and iOS development. Currently, I am focused on honing my skills in NextJS and expanding my knowledge in backend development.
            <br/> <br/> 
            In addition to my technical background, I bring over 7 years of experience in retail, customer service, and operations management. This experience has honed my leadership, problem-solving, and team collaboration skills—attributes that are invaluable in software development and project management.

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
'use client'
import React, { useRef, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Github, Mail, Linkedin, MapPin } from 'lucide-react'
import Image from 'next/image'


function ContactSection() {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      formRef.current?.reset()
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "patelhiren9857@gmail.com",
      link: "mailto:patelhiren9857@gmail.com",
    },
    
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Nelson Bay, NSW",
      link: null,
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "@iHirenDev",
      link: "https://github.com/iHirenDev",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "in/ihirenpatel/",
      link: "https://www.linkedin.com/in/ihirenpatel/",
    },
    {
      icon: <Image src="/sof.svg" alt="hiren" className="h-5 w-5" />,
      label: "Stack Overflow",
      value: "Hiren Patel",
      link: "https://stackoverflow.com/users/2552460/hiren",
    },
  ];

  return (
    <section id='contact' ref={sectionRef} className='py-24'>
      <div className='container px-4'>
        <div className='flex flex-col justify-center items-center text-3xl font-bold mb-16'>{`<Contact Me/>`}
          <p className='text-lg max-w-6xl py-4'>
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I&apos;d love to hear from you.
          </p>
        </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 flex flex-col">
                  <label className='' htmlFor="name">Name</label>
                  <input className='border border-gray-600 dark:border-gray-300 rounded-lg p-2' id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input className='border border-gray-600 dark:border-gray-300 rounded-lg p-2' id="email" type="email" placeholder="Your email" required />
                </div>
              
              <div className="space-y-2 flex flex-col">
                <label htmlFor="subject">Subject</label>
                <input className='border border-gray-600 dark:border-gray-300 rounded-lg p-2' id="subject" placeholder="How can I help you?" required />
              </div>
              
              <div className="space-y-2 flex flex-col">
                <label htmlFor="message">Message</label>
                
                <textarea className='border border-gray-600 dark:border-gray-300 rounded-lg p-2' id="message" placeholder="Your message" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full text-white" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
        </form>

        <div>
          <Card className='shadow-md bg-bgAccent/10 dark:bg-bgAccent/50'>
            <CardContent className=''>
              <div className='justify-center items-center text-center'>
                <h2 className='text-lg font-bold'>Feel free to reach out through any of these channels
                </h2>
              </div>
              <div>
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center mb-4 mt-10">
                    <div className="mr-4 rounded-full w-10 h-10 flex items-center justify-center bg-bgAccent/20 dark:bg-bgAccent/50">{contact.icon}</div>
                    <div>
                      <p className="font-bold">{contact.label}</p>
                      {contact.link ? (
                        <a 
                          href={contact.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline">{contact.value}</a>
                      ) : (
                        <p>{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                      
              </div>
            </CardContent>
          </Card>
        </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection



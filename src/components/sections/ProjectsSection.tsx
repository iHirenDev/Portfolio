'use client'

import React, {useRef, useState} from 'react'
import {GithubProjects} from '../../lib/github'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { HoverEffect } from '../ui/card-hover-effect'
import { motion } from 'framer-motion'
import { Button } from "../ui/button";
import { Github } from "lucide-react";


interface ProjectSectionProps {
  projects: GithubProjects[]
}


const manualProjects: GithubProjects[] = [{
  id:'colorly',
  name: 'Colorly',
  description: 'A NextJS project built with features like Color converter, Palette Generator and Gradient Makers.',
  html_url: '',
  homepage: 'https://colorly-gamma.vercel.app/',
  topics: ['react', 'tailwindcss', 'nextjs', 'shadcn'],
  language: 'TypeScript',
  stargazers_count: 0,
  fork: false
}]

function ProjectsSection({projects}:ProjectSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('featured');

  const languages = Array.from(new Set((projects || []).map(project => project.language).filter(Boolean)))

  const combinedProjects = [...manualProjects, ...(projects || [])];

  const featuredProjectNames = [
      'Colorly',
      'Portfolio',
      'Narrato',
      'TMDB-MovieApp',
      'FoodMates',
      'Tithi',
      'WorldNews',
      'Flutter-MVVM-Demo'
    ];

    const featuredProjects = featuredProjectNames
          .map(name => combinedProjects.find(project => project.name === name))
          .filter(Boolean);

  

  const filteredProjects = activeTab === 'featured'
    ? featuredProjects
    : activeTab === 'all' 
    ? combinedProjects 
    : combinedProjects.filter(project => project.language === activeTab);

  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-12"
    >
    <div className='container px-4'>
      <div className='flex flex-col items-center text-center mb-16'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-4 tracking-tight'>{`<Github Projects/>`}</h2>
        <p className='text-lg max-w-2xl'>A showcase of my projects and contributions.</p>
      </div>
    
    <Tabs 
      defaultValue='all' 
      value={activeTab} 
      onValueChange={setActiveTab} 
      className='mb-12'>
        
        <div className="flex justify-center">
            <TabsList className="flex flex-wrap h-fit justify-start border border-zinc-200 dark:border-zinc-700 gap-2 dark:bg-zinc-800">
              <TabsTrigger  value="featured">Featured</TabsTrigger>
              <TabsTrigger  value="all">All</TabsTrigger>
              {languages.map((language) => (
                <TabsTrigger key={language} value={language}>{language}</TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeTab}
            >
              {
                filteredProjects.map((project) => (
                  <motion.div key={project?.id} variants={itemVariants}> 
                     <div className='max-w-5xl h-full px-4 py-4'>
                       <HoverEffect project={project} className="h-full flex flex-col"/>
                     </div>
                  </motion.div>
                  
                ))
              }
            </motion.div>
          </TabsContent>
    </Tabs>
    <div className='flex justify-center'>
      <Button asChild>
        <a
          href='https://github.com/iHirenDev'
          target='_blank'
          rel='noreferrer'
          >
          <Github className="mr-2 h-5 w-5" />
          View my Github
        </a>
      </Button>
    </div>
    </div>
    </section>
  )
}

export default ProjectsSection
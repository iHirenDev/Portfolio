'use client'
import React from 'react'
import Image from 'next/image'
import {techstacks} from '../../lib/techstack'
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";

function SkillsSection() {
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

  return (
      <motion.section 
        className='py-16'
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{once: true, amount: 0.2}}  
      >
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-10'>My Tech Stack</h2>

          <div className='space-y-12 sm:grid sm:grid-cols-1 sm:gap-6'>
            {techstacks.map((category) => (
              <div key={category.title} className='sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start'>
                <h3 className='text-xl font-semibold sm:col-span-1 text-gray-700 dark:text-gray-300 mb-4'>
                  {category.title}
                </h3>
                
                <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 gap-3'>
                  {category.items.map((item, index) => (
                    <Tooltip.Provider delayDuration={100} key={item.name}>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900 cursor-default"
                        >
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                          <span className="text-gray-800 dark:text-gray-200">
                            {item.name}
                          </span>
                        </motion.div>
                      </Tooltip.Trigger>
                      {item.description && (
                        <Tooltip.Content
                          side="top"
                          sideOffset={6}
                          className="px-3 py-2 rounded-md text-sm bg-gray-800 text-white shadow-lg z-50"
                        >
                          {item.description}
                          <Tooltip.Arrow className="fill-gray-800" />
                        </Tooltip.Content>
                      )}
                    </Tooltip.Root>
                  </Tooltip.Provider>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
  )
}

export default SkillsSection
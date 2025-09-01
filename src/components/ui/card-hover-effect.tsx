import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./card";
import React, { useState } from "react";
import { Github, SquareArrowOutUpRight } from "lucide-react";

type GithubProject ={
  id: number | string
  name: string
  description: string
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  language: string
  fork: boolean
}
export const HoverEffect = ({
  project,
  className,
}: {
  project?: GithubProject;
 
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number| string | null>(null);
  
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 ",
        className
      )}
    >
        <div
      
          key={project?.html_url}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(project!.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === project?.id && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-300 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
         
          <Card className="flex flex-col justify-center">
            
            <CardTitle>{project!.name}</CardTitle>
            <CardDescription>{project!.description || 'No description available.'}</CardDescription>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                  {project!.topics.map((topic) => (
                    <Badge key={topic} variant="secondary">{topic}</Badge>
                    ))}
              </div>
              <div>
                    {project!.language && (
                      <Badge className="mt-2" variant="default">{project!.language}</Badge>
                    )}
              </div>
            </CardContent>
             <CardFooter className="flex justify-between">
             {project!.html_url && (
      <Button variant="outline" size="sm" asChild>
        <a href={project!.html_url} target="_blank" rel="noreferrer">
          <Github className="mr-2 h-4 w-4" />
          Code
          <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    )}
    {project!.homepage && (
      <Button variant="default" size="sm" asChild>
        <a href={project!.homepage} target="_blank" rel="noreferrer">
          
          Live Demo
          <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    )}          
              </CardFooter>
          </Card>
        </div>
      
    </div>
  );
};


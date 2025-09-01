
import {cache} from 'react'

export type GithubProjects ={
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

const userName = 'iHirenDev'


export const getStaticProps = cache(async () =>{
    try {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: {
          revalidate: 3600, 
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub projects')
    }

    const repos: GithubProjects[] = await response.json()

    // Filter out forked repositories and sort by stars
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
        console.error('Error fetching GitHub projects:', error)
        return []
    }
})

export const fetchGithubUser = cache(async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: {
          revalidate: 3600, 
        },
      })
  
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub user')
      }
  
      return await response.json()
    } catch (error) {
      console.error('Error fetching GitHub user:', error)
      return null
    }
})
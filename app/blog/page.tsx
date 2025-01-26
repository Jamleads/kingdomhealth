import FeaturedPost from '@/components/blog/FeaturedPost'
import Header from '@/components/blog/Header'
import LatestPost from '@/components/blog/LatestPost'
// import SearchBar from '@/components/blog/SearchBar'
import { Container, Stack } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <main className='flex flex-col showcase_gradient '>
        <div >
        <Container
      maxWidth='lg'
      >
        <Stack direction={'column'}
        spacing={2}
        className="md:py-16 py-16 md:flex items-center gap-3 justify-center" 
      >
        <Header />
        <FeaturedPost />
        </Stack>
        </Container>
        </div>

        <div className='showcase_gradient'>
        <Container
      maxWidth='lg'
      >
        <Stack direction={'column'}
        spacing={2}
        className="md:py-16 pb-16 md:flex items-center gap-3 justify-center" 
      >
        <LatestPost/>
      </Stack>
      </Container>
      </div>
    </main>
  )
}

export default Blog
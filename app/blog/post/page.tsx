import FeaturedPost from "@/components/blog/FeaturedPost"
import Header from "@/components/blog/Header"
import LatestPost from "@/components/blog/LatestPost"
import Posts from "@/components/blog/Posts"
import { Container, Stack } from "@mui/material"
import React from "react"

const Blog = () => {
  return (
    <main className="flex flex-col ">
      <Container maxWidth="lg" className="py-16">
        <Stack spacing={4}>
         <Posts/>
        </Stack>
      </Container>
    </main>
  )
}

export default Blog


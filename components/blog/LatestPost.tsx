"use client"
import { useState, useEffect } from "react"
import { Typography, Box, Chip, Stack, CircularProgress } from "@mui/material"
import Image from "next/image"
import Pagination from "./Pagination"
import Link from "next/link"
import { getRecentPosts } from "../../lib/graphql-api"
import type { Post } from "../../types/post"
import LatestPostSkeleton from "./LatestPostSkeleton"

const LatestPost = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const postsPerPage = 3
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const fetchedPosts = await getRecentPosts(postsPerPage * 3) // Fetch 9 posts to have 3 pages
        setPosts(fetchedPosts)
        console.log("po", fetchedPosts)
        setTotalPages(Math.ceil(fetchedPosts.length / postsPerPage))
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch latest posts")
        setLoading(false)
        console.error("Error fetching latest posts:", err)
      }
    }

    fetchPosts()
  }, [])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    return posts.slice(startIndex, endIndex)
  }

  if (loading) return <LatestPostSkeleton />
  if (error) return <Typography color="error">{error}</Typography>

  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Latest Posts
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        {getCurrentPagePosts().map((post, index) => (
          <Stack key={post.id} spacing={2} sx={{ flex: "1 1 33.33%" }}>
            <Image
              src={post.featuredImage?.url || "/placeholder.svg"}
              alt={post.title}
              width={400}
              height={300}
              layout="responsive"
            />
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Chip label={post.category || "Uncategorized"} color="primary" />
              <Typography variant="body2" color="text.secondary">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Stack>
            <Typography variant="h6" component="h3">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.excerpt}
            </Typography>
            <Link href={`/blog//post/${post.slug}`}>
              <Chip label="Read Post" variant="outlined" color="primary" clickable sx={{ alignSelf: "flex-start" }} />
            </Link>
          </Stack>
        ))}
      </Stack>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Box>
  )
}

export default LatestPost





// "use client"
// import React, { useState } from "react"
// import { Typography, Box, Chip, Stack } from "@mui/material"
// import Image from "next/image"
// import Pagination from "./Pagination"
// import Link from "next/link"

// const LatestPost = () => {
//   const [currentPage, setCurrentPage] = useState(1)
// //   const postsPerPage = 3
//   const totalPages = 3 // This would normally be calculated based on the total number of posts

//   const posts = [
//     {
//       image: "/limg1.png",
//       category: "General Health",
//       date: "January 20th, 2025",
//       title: "10 Unexpected Ways PCOS Affects Women's Lives",
//       excerpt: "Polycystic Ovary Syndrome (PCOS). These three words carry a heavy weight for millions of women...",
//     },
//     {
//       image: "/limg2.png",
//       category: "Men's Health",
//       date: "January 20th, 2025",
//       title: "Men's Health Matters: 5 Essential Tips to Boost Men's Health & Build Resilience",
//       excerpt:
//         "Men's health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a man goes through in his lifetime.",
//     },
//     {
//       image: "/limg3.png",
//       category: "General Health",
//       date: "January 22th, 2025",
//       title: "Mental Health Warning Signs: When to Seek Professional Help",
//       excerpt: "Mental health is a crucial aspect of overall well-being, yet it's often overlooked or misunderstood.",
//     },
//   ]

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page)
//     // In a real application, you would fetch the posts for the new page here
//   }

//   return (
//     <Box>
//       <Typography variant="h5" component="h2" gutterBottom>
//         Latest Posts
//       </Typography>
//       <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
//         {posts.map((post, index) => (
//           <Stack key={index} spacing={2} sx={{ flex: "1 1 33.33%" }}>
//             <Image
//               src={post.image || "/placeholder.svg"}
//               alt="post image"
//               width={400}
//               height={300}
//               layout="responsive"
//             />
//             <Stack direction="row" justifyContent="space-between" alignItems="center">
//               <Chip label={post.category} color="primary" />
//               <Typography variant="body2" color="text.secondary">
//                 {post.date}
//               </Typography>
//             </Stack>
//             <Typography variant="h6" component="h3">
//               {post.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {post.excerpt}
//             </Typography>
//             <Link href='/blog/category'>                        
//             <Chip label="Read Post" variant="outlined" color="primary" clickable sx={{ alignSelf: "flex-start" }} />
//              </Link>
//           </Stack>
//         ))}
//       </Stack>
//       <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//     </Box>
//   )
// }

// export default LatestPost


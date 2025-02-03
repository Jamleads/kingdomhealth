"use client"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import { Typography, Box, Chip, Stack, CircularProgress } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { getFeaturedPosts } from "../../lib/graphql-api"
import type { Post } from "../../types/post"
import FeaturedPostSkeleton from "./FeaturedPostSkeleton"

const FeaturedPost = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const posts: any = await getFeaturedPosts()
        console.log(posts.posts)
        
        setFeaturedPosts(posts.posts.slice(0, 2)) // Get the first two featured posts
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch featured posts")
        setLoading(false)
        console.error("Error fetching featured posts:", err)
      }
    }

    fetchFeaturedPosts()
  }, [])

  if (loading) return <FeaturedPostSkeleton />
  if (error) return <Typography color="error">{error}</Typography>

  return (
    <Stack direction={{ xs: "column", md: "row-reverse" }} spacing={4}>
      <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 25%", lg: "0 0 20%" } }}>
        <SearchBar />
      </Box>
      <Stack spacing={4} sx={{ flex: "1 1 auto" }}>
        <Typography variant="h5" component="h2">
          Featured Posts
        </Typography>
        <Stack direction={{ xs: "column", md: "column" }} spacing={4}>
          {featuredPosts.map((post, index) => (
            <Stack key={post.id} spacing={2} sx={{ flex: "1 1 50%" }} direction={{ xs: "column", md: "row" }} gap={2}>
              <Image src={post.featuredImage?.url || "/placeholder.svg"} alt={post.title} width={400} height={300} />
              <Stack direction={"column"} justifyContent={"space-between"} gap={2}>
                <Stack
                  direction="row"
                  justifyContent={{ xs: "space-between", md: "start" }}
                  spacing={4}
                  alignItems="center"
                >
                  <div className="text-[#7250E2] p-1">
                    <Chip label={post.category || "Uncategorized"} />
                  </div>
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
                <div className="text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full">
                  <Link href={`/blog/post/${post.slug}`}>Read Post</Link>
                </div>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FeaturedPost







// import React from "react"
// import SearchBar from "./SearchBar"
// import { Typography, Box, Chip, Stack } from "@mui/material"
// import Image from "next/image"
// import Link from "next/link"

// const FeaturedPost = () => {
//     return (
//         <Stack direction={{ xs: "column", md: "row-reverse" }} spacing={4}>
//             <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 25%", lg: "0 0 20%" } }}>
//                 <SearchBar />
//             </Box>
//             <Stack spacing={4} sx={{ flex: "1 1 auto" }}>
//                 <Typography variant="h5" component="h2" >
//                     Featured Posts
//                 </Typography>
//                 <Stack direction={{ xs: "column", md: "column" }} spacing={4}>
//                     {["/lp1.png", "/img2.png"].map((img, index) => (
//                         <Stack key={index} spacing={2}
//                             sx={{ flex: "1 1 50%" }}
//                             direction={{ xs: 'column', md: 'row' }}
//                             gap={2}
//                         >

//                             <Image src={img || "/placeholder.svg"} alt="post image" width={400} height={300}

//                             // layout="responsive"
//                             />
//                             <Stack
//                                 direction={'column'}
//                                 justifyContent={'space-between'}
//                                 gap={2}
//                             >
//                                 <Stack direction="row" justifyContent={{ xs: "space-between", md: "start" }}
//                                     spacing={4}
//                                     alignItems="center"
//                                     >
//                                     <div className='text-[#7250E2] p-1 
//                                 '>
//                                         <Chip label={index === 0 ? "News & Insights" : "Women's Health"}
//                                         />
//                                     </div>
//                                     <Typography variant="body2" color="text.secondary">
//                                         December 20th, 2025
//                                     </Typography>
//                                 </Stack>
//                                 <Typography variant="h6" component="h3">
//                                     {index === 0
//                                         ? "Digital Tracking Technologies & HIPAA: Latest Updates and Ongoing Risks"
//                                         : "Empowering wellness throughout every Stage of a Woman's Life"}
//                                 </Typography>

//                                 <Typography variant="body2" color="text.secondary">
//                                     {index === 0
//                                         ? "Are the digital tracking technologies you use for your website and healthcare marketing practices fully compliant with HIPAA regulations and digital tracking standards? You might think so, but even 'industry standards' like the Google Analytics (G4) and Meta pixels are not compliant."
//                                         : "Women's health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a woman goes through in her lifetime. Given the complexity and diversity of women's health issues."}
//                                 </Typography>
//                                 {/* <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit '>
//                                 <Chip label="Read Post" variant="outlined"  clickable sx={{ alignSelf: "flex-start" }} />
//                                 </div> */}
//                                 <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
//                                     <Link href='/blog/post'>
//                                     Read Post
//                                     </Link>
//                                 </div>
//                             </Stack>
//                         </Stack>
//                     ))}
//                 </Stack>
//             </Stack>
//         </Stack>
//     )
// }

// export default FeaturedPost



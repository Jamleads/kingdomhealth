"use client"
import type React from "react"
import { useState, useEffect } from "react"
import {
  Container,
  Typography,
  Stack,
  Box,
  Chip,
  TextField,
  InputAdornment,
  CircularProgress,
  Grid,
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { Search as SearchIcon } from "@mui/icons-material"
import { getPosts } from "../../../lib/graphql-api"
import type { Post } from "../../../types/post"

interface GroupedPosts {
  [category: string]: Post[]
}

const BlogCategory = () => {
  const [groupedPosts, setGroupedPosts] = useState<GroupedPosts>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const fetchedPosts :any = await getPosts()
        console.log("fetch", fetchedPosts)
        const grouped = fetchedPosts.posts.reduce((acc: GroupedPosts, post:any) => {
          const category = post.category || "Uncategorized"
          if (!acc[category]) {
            acc[category] = []
          }
          acc[category].push(post)
          return acc
        }, {})
        setGroupedPosts(grouped)
      } catch (err) {
        setError("Failed to fetch posts")
        console.error("Error fetching posts:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <main className="min-h-screen bg-white mb-5">
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems={{ md: "center" }}
          justifyContent="space-between"
        >
          <Typography variant="h4" component="div" className="font-semibold" sx={{ flex: { md: "0 0 33%" } }}
                justifyContent={{md:'start', xs:'center'}}
                >
            News & Insights
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
            Stay informed with Medicare&apos;s blog - expert health tips, wellness advice, and patient stories designed
            to empower you and guide your healthcare journey.
          </Typography>
        </Stack>
      </Container>

      {/* Search Section */}
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, display: "flex", justifyContent: "flex-end" }}>
          <TextField
            placeholder="Search by keywords"
            variant="outlined"
            sx={{ width: { xs: "100%", md: 300 } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "16px",
                backgroundColor: "white",
              },
            }}
          />
        </Box>

        {/* Categories and Posts Grid */}
        {loading ? (
          <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Grid container spacing={4}>
            {Object.entries(groupedPosts).map(([category, posts]) => (
              <Grid item xs={12} key={category}>
                <Box className="text-2xl xs:text-xl font-semibold mb-4">
                  {category}
                </Box>
                <Grid container spacing={3}>
                  {posts.map((post) => (
                    <Grid item xs={12} md={6} lg={4} key={post.id}>
                      <BlogPostCard {...post} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </main>
  )
}

// Blog Post Card Component
const BlogPostCard: React.FC<Post> = ({ title, excerpt, category, createdAt, featuredImage, slug }) => {
  return (
    <Stack spacing={3} className="group">
      <Box className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={featuredImage?.url || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </Box>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Chip
            label={category || "Uncategorized"}
            sx={{
              bgcolor: "#7250e224",
              color: "#7250E2",
              borderRadius: "16px",
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </Stack>
        <Typography variant="h6" className="font-semibold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="line-clamp-2">
          {excerpt}
        </Typography>
        <Link
          href={`/blog/post/${slug}`}
          className="text-[#20BEB8] border border-[#20BEB8] rounded-full px-4 py-1 w-fit hover:bg-[#20BEB8] hover:text-white transition-colors"
        >
          Read Post
        </Link>
      </Stack>
    </Stack>
  )
}

export default BlogCategory


// import type React from "react"
// import { Container, Typography, Stack, Box, Chip, TextField, InputAdornment, Pagination } from "@mui/material"
// import Image from "next/image"
// import Link from "next/link"
// import { Search as SearchIcon } from "@mui/icons-material"


// const BlogCategory = () => {
//   return (
    
//     <main className="min-h-screen bg-white">
      
//       {/* Hero Section */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Stack
//           direction={{ xs: "column", md: "row" }}
//           spacing={4}
//           alignItems={{ md: "center" }}
//           justifyContent="space-between"
//         >
//           <Typography variant="h1" className="text-4xl md:text-5xl font-bold">
//             News & Insights
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
//             Stay informed with Medicare&apos;s blog - expert health tips, wellness advice, and patient stories designed to
//             empower you and guide your healthcare journey.
//           </Typography>
//         </Stack>
//       </Container>

//       {/* Search and Category Section */}
//       <Container maxWidth="lg">
//         <Stack direction={{xs:'column', md:'row'}}
//         gap={1}
//         justifyContent="space-between" alignItems={{md:"center", xs:'start'}} sx={{ mb: 6 }}>
//           <Typography variant="h2" className="text-2xl font-semibold">
//             General Health
//           </Typography>
//           <TextField
//             placeholder="Search by keywords"
//             variant="outlined"
//             sx={{width:{xs:'100%', md:300}}}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//               sx: {
//                 borderRadius: "16px",
//                 backgroundColor: "white",
//               },
//             }}
//             // sx={{ width: 300 }}
//           />
//         </Stack>

//         {/* Blog Posts Grid */}
//         <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {blogPosts.map((post) => (
//             <BlogPostCard key={post.id} {...post} />
//           ))}
//         </Box>

//         {/* Pagination */}
//         <Stack alignItems="center" sx={{ my: 6 }}>
//           <Pagination
//             count={10}
//             shape="rounded"
//             size="large"
//             sx={{
//               "& .MuiPaginationItem-root": {
//                 "&.Mui-selected": {
//                   backgroundColor: "#20BEB8",
//                   color: "white",
//                   "&:hover": {
//                     backgroundColor: "#1ca8a3",
//                   },
//                 },
//               },
//             }}
//           />
//         </Stack>
//       </Container>

//     </main>
//   )
// }

// interface BlogPost {
//     id: string
//     title: string
//     excerpt: string
//     category: string
//     date: string
//     image: string
//   }
// // Blog Post Card Component
// const BlogPostCard: React.FC<BlogPost> = ({ title, excerpt, category, date, image }) => {
//   return (
//     <Stack spacing={3} className="group">
//       <Box className="relative aspect-[4/3] rounded-lg overflow-hidden">
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           fill
//           className="object-cover transition-transform group-hover:scale-105"
//         />
//       </Box>
//       <Stack spacing={2}>
//         <Stack direction="row" justifyContent="space-between" alignItems="center">
//           <Chip
//             label={category}
//             sx={{
//               bgcolor: "#7250e224",
//               color: "#7250E2",
//               borderRadius: "16px",
//             }}
//           />
//           <Typography variant="body2" color="text.secondary">
//             {date}
//           </Typography>
//         </Stack>
//         <Typography variant="h6" className="font-semibold">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" className="line-clamp-2">
//           {excerpt}
//         </Typography>
//         <Link
//           href="#"
//           className="text-[#20BEB8] border border-[#20BEB8] rounded-full px-4 py-1 w-fit hover:bg-[#20BEB8] hover:text-white transition-colors"
//         >
//           Read Post
//         </Link>
//       </Stack>
//     </Stack>
//   )
// }

// // Sample data
// const blogPosts: BlogPost[] = [
//   {
//     id: "1",
//     title: "10 Unexpected Ways PCOS Affects Women's Lives",
//     excerpt: "Polycystic Ovary Syndrome (PCOS). These three words carry a heavy weight for millions of women...",
//     category: "General Health",
//     date: "December 20, 2024",
//     image: "/limg1.png",
//   },
//   {
//     id: "2",
//     title: "Men's Health Matters: 5 Essential Tips to Boost Men's Health & Build Resilience",
//     excerpt: "Women's health encompasses a broad spectrum of concerns, reflecting the unique challenges...",
//     category: "General Health",
//     date: "December 20, 2024",
//     image: "/limg2.png",
//   },
//   {
//     id: "3",
//     title: "Mental Health Warning Signs: When to Seek Professional Help",
//     excerpt: "Mental health is just as important as physical health. Just like you would see a doctor if you...",
//     category: "General Health",
//     date: "December 20, 2024",
//     image: "/limg3.png",
//   },
//   {
//     id: "4",
//     title: "Why Every Small Business Needs a Health and Wellness Plan?",
//     excerpt: "In the dynamic landscape of small businesses, the importance of prioritizing the well-being of...",
//     category: "General Health",
//     date: "December 20, 2024",
//     image: "/img2.png",
//   },
//   {
//     id: "5",
//     title: "10 Health Checks You Can Do At Home To Keep You Alive",
//     excerpt: "If the Covid-19 pandemic has taught us anything, it is that preventative health care is essential...",
//     category: "General Health",
//     date: "December 20, 2024",
//     image: "/limg2.png",
//   },
//   {
//     id: "6",
//     title: "Empowering wellness throughout every Stage of a Woman's Life",
//     excerpt: "Women's health encompasses a broad spectrum of concerns, reflecting the unique challenges...",
//     category: "General Health",
//     date: "December 20, 2024",
//     image: "/limg3.png",
//   },
// ]



// export default BlogCategory


"use client"
import React, { useState } from "react"
import { Typography, Box, Chip, Stack } from "@mui/material"
import Image from "next/image"
import Pagination from "./Pagination"
import Link from "next/link"

const LatestPost = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3
  const totalPages = 3 // This would normally be calculated based on the total number of posts

  const posts = [
    {
      image: "/limg1.png",
      category: "General Health",
      date: "January 20th, 2025",
      title: "10 Unexpected Ways PCOS Affects Women's Lives",
      excerpt: "Polycystic Ovary Syndrome (PCOS). These three words carry a heavy weight for millions of women...",
    },
    {
      image: "/limg2.png",
      category: "Men's Health",
      date: "January 20th, 2025",
      title: "Men's Health Matters: 5 Essential Tips to Boost Men's Health & Build Resilience",
      excerpt:
        "Men's health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a man goes through in his lifetime.",
    },
    {
      image: "/limg3.png",
      category: "General Health",
      date: "January 22th, 2025",
      title: "Mental Health Warning Signs: When to Seek Professional Help",
      excerpt: "Mental health is a crucial aspect of overall well-being, yet it's often overlooked or misunderstood.",
    },
  ]

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // In a real application, you would fetch the posts for the new page here
  }

  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Latest Posts
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        {posts.map((post, index) => (
          <Stack key={index} spacing={2} sx={{ flex: "1 1 33.33%" }}>
            <Image
              src={post.image || "/placeholder.svg"}
              alt="post image"
              width={400}
              height={300}
              layout="responsive"
            />
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Chip label={post.category} color="primary" />
              <Typography variant="body2" color="text.secondary">
                {post.date}
              </Typography>
            </Stack>
            <Typography variant="h6" component="h3">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.excerpt}
            </Typography>
            <Link href='/blog/category'>                        
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

// import React from "react"
// import { Typography, Box, Chip, Stack } from "@mui/material"
// import Image from "next/image"

// const LatestPost = () => {
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
//             <Chip label="Read Post" variant="outlined" color="primary" clickable sx={{ alignSelf: "flex-start" }} />
//           </Stack>
//         ))}
//       </Stack>
//     </Box>
//   )
// }

// export default LatestPost



// // import React from 'react'
// // // import SearchBar from './SearchBar'
// // import { Container } from '@mui/material'
// // import Image from 'next/image'
// // // import Posts from './Posts'

// // const LatestPost = () => {
// //     return (
// //         <div className=''>
// //         <Container
// //             maxWidth='lg'
            
// //         >
// //                 <div className='flex flex-col gap-5'>
// //                     <h1
// //                         className='flex font-semibold text-xl'
// //                     >Latest Posts</h1>
// //                     <div>
// //                         <div className='flex flex-col justify-center align-middle gap-3'>
// //                             <div className='flex '>
// //                                 <Image
// //                                     src={'/limg1.png'}
// //                                     alt='post image'
// //                                     width={200}
// //                                     height={200}
// //                                     className='w-[250rem] md:w-[330rem] mt-1 '
// //                                 />
// //                             </div>
// //                             <div className='flex flex-row justify-around align-middle'>
// //                                 <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
// //                                     General Health
// //                                 </div>
// //                                 <div className='p-1 text-[#64748B]'>
// //                                     January 20th, 2025
// //                                 </div>
// //                             </div>
// //                             <div>
// //                                 <div className='flex flex-col gap-4'>
// //                                     <div className='flex flex-col gap-3 mt-3'>
// //                                         <h1 className='font-semibold text-[25px]  text-[#0F172A]'>
// //                                            10 Unexpected Ways PCOS Affects Women&#39;s Lives
// //                                         </h1>
// //                                         <p className='text-[#64748B]'>
// //                                             Polycystic Ovary Syndrome &#40;PCOS&#41;. These three words carry a heavy weight for millions of women...
// //                                         </p>
// //                                         <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
// //                                             Read Post
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* 2nd featured post */}

// //                     <div>
// //                         <div className='flex flex-col justify-center align-middle gap-3'>
// //                             <div className='flex '>
// //                                 <Image
// //                                     src={'/limg2.png'}
// //                                     alt='post image'
// //                                     width={200}
// //                                     height={200}
// //                                     className='w-[250rem] md:w-[330rem] mt-1 '
// //                                 />
// //                             </div>
// //                             <div className='flex flex-row justify-around align-middle'>
// //                                 <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
// //                                     Men&#39;s Health
// //                                 </div>
// //                                 <div className='p-1 text-[#64748B]'>
// //                                     January 20th, 2025
// //                                 </div>
// //                             </div>
// //                             <div>
// //                                 <div className='flex flex-col gap-4'>
// //                                     <div className='flex flex-col gap-3 mt-3'>
// //                                         <h1 className='font-semibold text-[25px]  text-[#0F172A]'>
// //                                         Men&#39;s Health Matters: 5 Essential Tips to Boost Men&#39;s Health & Build Resilience
// //                                         </h1>
// //                                         <p className='text-[#64748B]'>
// //                                         Men&#39;s health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a woman goes through in her lifetime. Given the complexity and diversity of women&#39;s health issues.
// //                                         </p>
// //                                         <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
// //                                             Read Post
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* 3rd post  */}

// //                     <div>
// //                         <div className='flex flex-col justify-center align-middle gap-3'>
// //                             <div className='flex '>
// //                                 <Image
// //                                     src={'/limg3.png'}
// //                                     alt='post image'
// //                                     width={200}
// //                                     height={200}
// //                                     className='w-[250rem] md:w-[330rem] mt-1 '
// //                                 />
// //                             </div>
// //                             <div className='flex flex-row justify-around align-middle'>
// //                                 <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
// //                                     General Health
// //                                 </div>
// //                                 <div className='p-1 text-[#64748B]'>
// //                                     January 22th, 2025
// //                                 </div>
// //                             </div>
// //                             <div>
// //                                 <div className='flex flex-col gap-4'>
// //                                     <div className='flex flex-col gap-3 mt-3'>
// //                                         <h1 className='font-semibold text-[25px]  text-[#0F172A]'>
// //                                         Mental Health Warning Signs: When to Seek Professional Help
// //                                         </h1>
// //                                         <p className='text-[#64748B]'>
// //                                         Men&#39;s health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a woman goes through in her lifetime. Given the complexity and diversity of women&#39;s health issues.
// //                                         </p>
// //                                         <div className='text-[#4bf7f1] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
// //                                             Read Post
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //         </Container>
// //         </div>
// //     )
// // }

// // export default LatestPost
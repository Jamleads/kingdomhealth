import { Container, Typography, Stack, Box, Chip, Grid } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { getPosts } from "@/lib/graphql-api"

const Posts = ({ posts }: any) => {
  return (
    <main className="min-h-screen bg-white">
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {posts.map((post: any) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Stack spacing={2}>
                <Chip
                  label={post.category}
                  sx={{
                    bgcolor: "#7250e224",
                    color: "#7250E2",
                    alignSelf: "flex-start",
                  }}
                />
                <Typography
                  variant="h3"
                  className="text-xl sm:text-2xl font-bold line-clamp-2"
                  sx={{ minHeight: { sm: "3.5em" } }}
                >
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(post.createdAt).toDateString()}
                </Typography>
                <Box className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src={post.featuredImage.url || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                </Box>
                <Typography
                  variant="body1"
                  className="text-gray-600 leading-relaxed line-clamp-3"
                  sx={{ minHeight: { sm: "4.5em" } }}
                >
                  {post.excerpt}
                </Typography>
                <Link
                  href={`/blog/post/${post.slug}`}
                  className="text-[#20BEB8] border border-[#20BEB8] rounded-full px-4 py-2 w-fit hover:bg-[#20BEB8] hover:text-white transition-colors text-sm sm:text-base"
                >
                  Read More
                </Link>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}

export async function getStaticProps() {
  const data = await getPosts()
  return { props: { posts: data.posts }, revalidate: 10 }
}

export default Posts

// // pages/posts.tsx
// import React from "react";
// import { Container, Typography, Stack, Box, Chip } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import { getPosts } from "@/lib/graphql-api";

// const Posts = ({ posts } :any) => {
//   return (
//     <main className="min-h-screen bg-white">
//       <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
//         <Stack spacing={4}>
//           {posts.map((post : any) => (
//             <Stack key={post.id} spacing={2}>
//               <Chip label={post.category} sx={{ bgcolor: "#7250e224", color: "#7250E2" }} />
//               <Typography variant="h3" className="text-2xl md:text-4xl font-bold">
//                 {post.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {new Date(post.createdAt).toDateString()}
//               </Typography>
//               <Box className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
//                 <Image src={post.featuredImage.url} alt={post.title} fill className="object-cover" />
//               </Box>
//               <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
//                 {post.excerpt}
//               </Typography>
//               <Link href={`/blog/post/${post.slug}`} className="text-[#20BEB8] border border-[#20BEB8] rounded-full px-4 py-1 w-fit hover:bg-[#20BEB8] hover:text-white transition-colors">
//                 Read More
//               </Link>
//             </Stack>
//           ))}
//         </Stack>
//       </Container>
//     </main>
//   );
// };

// export async function getStaticProps() {
//   const data = await getPosts();
//   return { props: { posts: data.posts }, revalidate: 10 };
// }

// export default Posts;
// // import React from "react"
// // import { Container, Typography, Stack, Box, Chip, Divider } from "@mui/material"
// // import Image from "next/image"

// // import Link from "next/link"
// // import { Facebook, Twitter, LinkedIn } from "@mui/icons-material"
// // import IconButton from "./icon-button"

// // const Posts = () => {
// //   return (
// //     <main className="min-h-screen bg-white">
// //       {/* Blog Content */}
// //       <Container maxWidth="lg" sx={{ py: {xs:3, md:8} }}>
// //         <Stack spacing={4}>
// //           {/* Category and Title */}
// //           <Stack spacing={2}>
// //             <Chip
// //               label="News & Insights"
// //               sx={{
// //                 bgcolor: "#7250e224",
// //                 color: "#7250E2",
// //                 borderRadius: "16px",
// //                 width: "fit-content",
// //               }}
// //             />
// //             <Typography variant="h3" className="text-2xl md:text-4xl font-bold">
// //               Mental Health Warning Signs: When to Seek Professional Help
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               December 20, 2023
// //             </Typography>
// //           </Stack>

// //           {/* Featured Image */}
// //           <Box className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
// //             <Image
// //               src="/limg3.png"
// //               alt="Person sitting on bed showing signs of depression"
// //               fill
// //               className="object-cover"
// //             />
// //           </Box>

// //           {/* Article Content */}
// //           <Box className="prose prose-lg max-w-none">
// //             <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               Mental health is just as important as physical health. Just like you would see a doctor if you were
// //               feeling physically ill, it&apos;s important to seek professional help if you are struggling with your mental
// //               health.
// //             </Typography>

// //             <Typography variant="h2" className="text-2xl font-bold mt-8 mb-4">
// //               Mental Health Warning Signs
// //             </Typography>
// //             <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               Mental health warning signs can vary from person to person, but there are some common changes that could
// //               indicate a problem. Mental health challenges may also present differently depending on the person&apos;s age.
// //             </Typography>

// //             <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               If you are experiencing any of the following changes, it&apos;s important to talk to a doctor or mental health
// //               professional:jfolrjfoiijlvnffojboooorr
// //             </Typography>

// //             <ul className="list-disc pl-6 mb-6">
// //               <li>Changes in mood, feeling sad, anxious, or angry</li>
// //               <li>Difficulty concentrating or making decisions</li>
// //               <li>Physical changes: Headaches, stomachaches, or other unexplained physical symptoms</li>
// //             </ul>

// //             <Typography variant="h3" className="text-2xl font-bold mt-8 mb-4">
// //               Warning Signs by Condition
// //             </Typography>
// //             <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               In addition to the general warning signs listed above, there are also some specific warning signs that can
// //               indicate different mental health conditions. Here are some examples:
// //             </Typography>

// //             {/* Continue with more content sections... */}

// //             <Box className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
// //               <Typography variant="body1" className="italic text-gray-600">
// //               &#34;Remember, we are social beings. It&apos;s human beings, to psychologically survive life we need to be with
// //                 other people, share pains and challenges. It is sense of purpose and meaning.&#34 - Barbara De Angelis
// //               </Typography>
// //             </Box>
// //           </Box>

// //           {/* Social Share */}
// //           <Stack direction="row" spacing={2} alignItems="center">
// //             <Typography variant="body2" color="text.secondary">
// //               Share this article:
// //             </Typography>
// //             <Stack direction="row" spacing={1}>
// //               <IconButton className="text-[#1877F2] hover:bg-[#1877F2]/10">
// //                 <Facebook />
// //               </IconButton>
// //               <IconButton className="text-[#1DA1F2] hover:bg-[#1DA1F2]/10">
// //                 <Twitter />
// //               </IconButton>
// //               <IconButton className="text-[#0A66C2] hover:bg-[#0A66C2]/10">
// //                 <LinkedIn />
// //               </IconButton>
// //             </Stack>
// //           </Stack>

// //           <Divider sx={{ my: 4 }} />

// //           {/* Related Posts */}
// //           <Box>
// //             <Typography variant="h3" className="text-2xl font-bold mb-6">
// //               More posts
// //             </Typography>
// //             <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
// //               {relatedPosts.map((post, index) => (
// //                 <RelatedPostCard key={index} {...post} />
// //               ))}
// //             </Stack>
// //           </Box>
// //         </Stack>
// //       </Container>
// //     </main>
// //   )
// // }
// //  interface RelatedPost {
// //     image: string
// //     category: string
// //     date: string
// //     title: string
// //   }
  
  
// // // Related Post Card Component
// // const RelatedPostCard = ({ image, category, date, title } : RelatedPost) => {
// //   return (
// //     <Stack spacing={2} sx={{ flex: "1 1 33.33%" }}>
// //       <Box className="relative aspect-[16/9] rounded-lg overflow-hidden">
// //         <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
// //       </Box>
// //       <Stack direction="row" justifyContent="space-between" alignItems="center">
// //         <Chip
// //           label={category}
// //           sx={{
// //             bgcolor: "#7250e224",
// //             color: "#7250E2",
// //             borderRadius: "16px",
// //           }}
// //         />
// //         <Typography variant="body2" color="text.secondary">
// //           {date}
// //         </Typography>
// //       </Stack>
// //       <Typography variant="h6" className="font-semibold">
// //         {title}
// //       </Typography>
// //       <Link
// //         href="#"
// //         className="text-[#20BEB8] border border-[#20BEB8] rounded-full px-4 py-1 w-fit hover:bg-[#20BEB8] hover:text-white transition-colors"
// //       >
// //         Read Post
// //       </Link>
// //     </Stack>
// //   )
// // }

// // // Sample data for related posts
// // const relatedPosts = [
// //   {
// //     image: "/limg1.png",
// //     category: "News & Insights",
// //     date: "December 20, 2024",
// //     title: "Why Every Small Business Needs a Health and Wellness Plan?",
// //   },
// //   {
// //     image: "/limg2.png",
// //     category: "General Health",
// //     date: "December 20, 2024",
// //     title: "10 Health Checks You Can Do At Home To Keep You Alive",
// //   },
// //   {
// //     image: "/img2.png",
// //     category: "Women's Health",
// //     date: "December 20, 2024",
// //     title: "Empowering wellness throughout every Stage of a Woman's Life",
// //   },
// // ]

// // export default Posts

// // query MyQuery {
// //   post(
// //     where: {slug: "mental-health-warning-signs-when-to-seek-professional-help-general-health"}
// //   ) {
// //     id
// //     excerpt
// //     featured
// //     featuredImage {
// //       url
// //     }
// //     category
// //     createdAt
// //     slug
// //     quote
// //     title
// //   }
// // }
// // import React from "react"
// // import { Container, Typography, Stack, Box, Chip, Divider } from "@mui/material"
// // import Image from "next/image"

// // import Link from "next/link"
// // import { Facebook, Twitter, LinkedIn } from "@mui/icons-material"
// // import IconButton from "./icon-button"

// // const Posts = () => {
// //   return (
// //     <main className="min-h-screen bg-white">
// //       {/* Blog Content */}
// //       <Container maxWidth="lg" sx={{ py: {xs:3, md:8} }}>
// //         <Stack spacing={4}>
// //           {/* Category and Title */}
// //           <Stack spacing={2}>
// //             <Chip
// //               label="News & Insights"
// //               sx={{
// //                 bgcolor: "#7250e224",
// //                 color: "#7250E2",
// //                 borderRadius: "16px",
// //                 width: "fit-content",
// //               }}
// //             />
// //             <Typography variant="h3" className="text-2xl md:text-4xl font-bold">
// //               Mental Health Warning Signs: When to Seek Professional Help
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               December 20, 2023
// //             </Typography>
// //           </Stack>

// //           {/* Featured Image */}
// //           <Box className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
// //             <Image
// //               src="/limg3.png"
// //               alt="Person sitting on bed showing signs of depression"
// //               fill
// //               className="object-cover"
// //             />
// //           </Box>

// //           {/* Article Content */}
// //           <Box className="prose prose-lg max-w-none">
// //             <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               Mental health is just as important as physical health. Just like you would see a doctor if you were
// //               feeling physically ill, it&apos;s important to seek professional help if you are struggling with your mental
// //               health.
// //             </Typography>

// //             <Typography variant="h2" className="text-2xl font-bold mt-8 mb-4">
// //               Mental Health Warning Signs
// //             </Typography>
// //             <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               Mental health warning signs can vary from person to person, but there are some common changes that could
// //               indicate a problem. Mental health challenges may also present differently depending on the person&apos;s age.
// //             </Typography>

// //             <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               If you are experiencing any of the following changes, it&apos;s important to talk to a doctor or mental health
// //               professional:jfolrjfoiijlvnffojboooorr
// //             </Typography>

// //             <ul className="list-disc pl-6 mb-6">
// //               <li>Changes in mood, feeling sad, anxious, or angry</li>
// //               <li>Difficulty concentrating or making decisions</li>
// //               <li>Physical changes: Headaches, stomachaches, or other unexplained physical symptoms</li>
// //             </ul>

// //             <Typography variant="h3" className="text-2xl font-bold mt-8 mb-4">
// //               Warning Signs by Condition
// //             </Typography>
// //             <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               In addition to the general warning signs listed above, there are also some specific warning signs that can
// //               indicate different mental health conditions. Here are some examples:
// //             </Typography>

// //             {/* Continue with more content sections... */}

// //             <Box className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
// //               <Typography variant="body1" className="italic text-gray-600">
// //               &#34;Remember, we are social beings. It&apos;s human beings, to psychologically survive life we need to be with
// //                 other people, share pains and challenges. It is sense of purpose and meaning.&#34 - Barbara De Angelis
// //               </Typography>
// //             </Box>
// //           </Box>

// //           {/* Social Share */}
// //           <Stack direction="row" spacing={2} alignItems="center">
// //             <Typography variant="body2" color="text.secondary">
// //               Share this article:
// //             </Typography>
// //             <Stack direction="row" spacing={1}>
// //               <IconButton className="text-[#1877F2] hover:bg-[#1877F2]/10">
// //                 <Facebook />
// //               </IconButton>
// //               <IconButton className="text-[#1DA1F2] hover:bg-[#1DA1F2]/10">
// //                 <Twitter />
// //               </IconButton>
// //               <IconButton className="text-[#0A66C2] hover:bg-[#0A66C2]/10">
// //                 <LinkedIn />
// //               </IconButton>
// //             </Stack>
// //           </Stack>

// //           <Divider sx={{ my: 4 }} />

// //           {/* Related Posts */}
// //           <Box>
// //             <Typography variant="h3" className="text-2xl font-bold mb-6">
// //               More posts
// //             </Typography>
// //             <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
// //               {relatedPosts.map((post, index) => (
// //                 <RelatedPostCard key={index} {...post} />
// //               ))}
// //             </Stack>
// //           </Box>
// //         </Stack>
// //       </Container>
// //     </main>
// //   )
// // }
// //  interface RelatedPost {
// //     image: string
// //     category: string
// //     date: string
// //     title: string
// //   }
  
  
// // // Related Post Card Component
// // const RelatedPostCard = ({ image, category, date, title } : RelatedPost) => {
// //   return (
// //     <Stack spacing={2} sx={{ flex: "1 1 33.33%" }}>
// //       <Box className="relative aspect-[16/9] rounded-lg overflow-hidden">
// //         <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
// //       </Box>
// //       <Stack direction="row" justifyContent="space-between" alignItems="center">
// //         <Chip
// //           label={category}
// //           sx={{
// //             bgcolor: "#7250e224",
// //             color: "#7250E2",
// //             borderRadius: "16px",
// //           }}
// //         />
// //         <Typography variant="body2" color="text.secondary">
// //           {date}
// //         </Typography>
// //       </Stack>
// //       <Typography variant="h6" className="font-semibold">
// //         {title}
// //       </Typography>
// //       <Link
// //         href="#"
// //         className="text-[#20BEB8] border border-[#20BEB8] rounded-full px-4 py-1 w-fit hover:bg-[#20BEB8] hover:text-white transition-colors"
// //       >
// //         Read Post
// //       </Link>
// //     </Stack>
// //   )
// // }

// // // Sample data for related posts
// // const relatedPosts = [
// //   {
// //     image: "/limg1.png",
// //     category: "News & Insights",
// //     date: "December 20, 2024",
// //     title: "Why Every Small Business Needs a Health and Wellness Plan?",
// //   },
// //   {
// //     image: "/limg2.png",
// //     category: "General Health",
// //     date: "December 20, 2024",
// //     title: "10 Health Checks You Can Do At Home To Keep You Alive",
// //   },
// //   {
// //     image: "/img2.png",
// //     category: "Women's Health",
// //     date: "December 20, 2024",
// //     title: "Empowering wellness throughout every Stage of a Woman's Life",
// //   },
// // ]

// // export default Posts

// // query MyQuery {
// //   post(
// //     where: {slug: "mental-health-warning-signs-when-to-seek-professional-help-general-health"}
// //   ) {
// //     id
// //     excerpt
// //     featured
// //     featuredImage {
// //       url
// //     }
// //     category
// //     createdAt
// //     slug
// //     quote
// //     title
// //   }
// // }
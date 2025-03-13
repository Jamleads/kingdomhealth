"use client";
import { useEffect, useState } from "react";
import type React from "react";

import {
  Container,
  Typography,
  Stack,
  Box,
  Chip,
  Divider,
  useMediaQuery,
  useTheme,
  SvgIcon,
} from "@mui/material";
import Image from "next/image";
import { Facebook, LinkedIn } from "@mui/icons-material";
import IconButton from "@/components/blog/icon-button";
import RelatedPostCard from "@/components/blog/RelatedPostCard";
import { getPostDetails, getSimilarPosts } from "@/lib/graphql-api";
import SinglePostSkeleton from "@/components/blog/SinglePostSkeleton";
import type { Post } from "@/types/post";

// Custom X (Twitter) Icon
const XIcon = (props: any) => (
  <SvgIcon {...props}>
    <path
      d="M17.447 2H20.5l-7.357 8.418L21 22h-5.02l-5.434-6.46L5.5 22H2.5l7.81-8.925L3 2h5.02l4.85 5.874L17.447 2Z"
      fill="currentColor"
    />
  </SvgIcon>
);

interface SinglePostProps {
  slug: string;
}

const SinglePost: React.FC<SinglePostProps> = ({ slug }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href); // Ensure we get the current page URL
    }
  }, []);

// Function to copy content to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('copied');
    // alert("Post content copied! Paste it in your social media post.");
  }).catch(err => console.error("Failed to copy text: ", err));
};



  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        const postData = await getPostDetails(slug);
        setPost(postData);

        const similarPosts = await getSimilarPosts(slug, postData?.category || "");
        setRelatedPosts(similarPosts?.slice(0, 3) || []);
      } catch (err) {
        setError("Failed to load post data");
        console.error("Error fetching post data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  if (loading) {
    return <SinglePostSkeleton />;
  }

  if (error || !post) {
    return (
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
        <Typography color="error">{error || "Post not found"}</Typography>
      </Container>
    );
  }

  // Share on Facebook
const shareOnFacebook = () => {
  const textToShare = `${post.title}\nRead more: ${url}`;
  copyToClipboard(textToShare);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookUrl, "_blank", "width=600,height=400");
};

// Share on Twitter (X)
const shareOnTwitter = () => {
  const textToShare = `${post.title}\nRead more: ${url}`;
  copyToClipboard(textToShare);
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`;
  window.open(twitterUrl, "_blank");
};

// Share on LinkedIn
const shareOnLinkedIn = () => {
  const textToShare = `${post.title}\nRead more: ${url}`;
  copyToClipboard(textToShare);
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  window.open(linkedInUrl, "_blank");
};


  return (
    <main className="min-h-screen bg-white">
      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 5, md: 8 } }}>
        <Stack spacing={{ xs: 3, sm: 4, md: 5 }}>
          {/* Category and Title */}
          <Stack spacing={{ xs: 1, sm: 2 }}>
            <Chip
              label={post.category || "Uncategorized"}
              sx={{
                bgcolor: "#7250e224",
                color: "#7250E2",
                borderRadius: "16px",
                width: "fit-content",
              }}
            />
            <Typography variant={isMobile ? "h5" : isTablet ? "h4" : "h3"} className="font-bold">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
          </Stack>

          {/* Featured Image */}
          <Box
            className="relative w-full rounded-lg overflow-hidden"
            sx={{
              height: { xs: "200px", sm: "300px", md: "400px" },
              maxHeight: { xs: "50vh", sm: "60vh", md: "70vh" },
            }}
          >
            <Image
              src={post.featuredImage?.url || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 90vw, 80vw"
            />
          </Box>

          {/* Article Content */}
          <Box className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content?.html || "" }} className="blog-content" />
            {post.quote && (
              <Box className="my-6 sm:my-8 p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <Typography variant="body2" className="italic text-gray-600">
                  {post.quote}
                </Typography>
              </Box>
            )}
          </Box>

          {/* Social Share */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Share this article:
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton className="text-[#1877F2] hover:bg-[#1877F2]/10" onClick={shareOnFacebook}>
                <Facebook fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
              <IconButton className="text-[#1DA1F2] hover:bg-[#1DA1F2]/10" onClick={shareOnTwitter}>
                <XIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
              <IconButton className="text-[#0A66C2] hover:bg-[#0A66C2]/10" onClick={shareOnLinkedIn}>
                <LinkedIn fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
            </Stack>
          </Stack>

          <Divider sx={{ my: { xs: 3, sm: 4 } }} />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <Box>
              <Typography variant={isMobile ? "h6" : "h5"} className="font-bold mb-4 sm:mb-6">
                More posts
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 4 }}>
                {relatedPosts.map((relatedPost) => (
                  <RelatedPostCard key={relatedPost.id} {...relatedPost} />
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      </Container>
    </main>
  );
};

export default SinglePost;


// "use client";
// import { useEffect, useState } from "react";
// import { Container, Typography, Stack, Box, Chip, Divider, CircularProgress } from "@mui/material";
// import Image from "next/image";
// import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
// import IconButton from "@/components/blog/icon-button";
// import RelatedPostCard from "@/components/blog/RelatedPostCard";
// import { getPostDetails, getSimilarPosts } from "@/lib/graphql-api";
// import SinglePostSkeleton from "@/components/blog/SinglePostSkeleton";
// import type { Post } from "@/types/post";

// interface SinglePostProps {
//   slug: string;
// }

// const SinglePost: React.FC<SinglePostProps> = ({ slug }) => {
//   const [post, setPost] = useState<Post | null>(null);
//   const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPostData = async () => {
//       try {
//         setLoading(true);
//         const postData = await getPostDetails(slug);
//         setPost(postData);
  
//         const similarPosts = await getSimilarPosts(slug, postData?.category || "");
//         setRelatedPosts(similarPosts?.slice(0, 3) || []);
//       } catch (err) {
//         setError("Failed to load post data");
//         console.error("Error fetching post data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchPostData();
//   }, [slug]);
  

//   if (loading) {
//     return <SinglePostSkeleton />;
//   }

//   if (error || !post) {
//     return (
//       <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
//         <Typography color="error">{error || "Post not found"}</Typography>
//       </Container>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-white">
//       <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
//         <Stack spacing={4}>
//           {/* Category and Title */}
//           <Stack spacing={2}>
//             <Chip
//               label={post.category || "Uncategorized"}
//               sx={{
//                 bgcolor: "#7250e224",
//                 color: "#7250E2",
//                 borderRadius: "16px",
//                 width: "fit-content",
//               }}
//             />
//             <Typography variant="h4" className="text-xl md:text-4xl font-bold">
//               {post.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {new Date(post.createdAt).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </Typography>
//           </Stack>

//           {/* Featured Image */}
//           <Box className="relative w-full aspect-[16/9] md:aspect-[23/9] rounded-lg overflow-hidden">
//             <Image src={post.featuredImage?.url || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
//           </Box>

//           {/* Article Content */}
//           <Box className="prose prose-lg max-w-none">
//             <div dangerouslySetInnerHTML={{ __html: post.content?.html || "" }} className="blog-content" />

//             {post.quote && (
//               <Box className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
//                 <Typography variant="body1" className="italic text-gray-600">
//                   {post.quote}
//                 </Typography>
//               </Box>
//             )}
//           </Box>

//           {/* Social Share */}
//           <Stack direction="row" spacing={2} alignItems="center">
//             <Typography variant="body2" color="text.secondary">
//               Share this article:
//             </Typography>
//             <Stack direction="row" spacing={1}>
//               <IconButton className="text-[#1877F2] hover:bg-[#1877F2]/10">
//                 <Facebook />
//               </IconButton>
//               <IconButton className="text-[#1DA1F2] hover:bg-[#1DA1F2]/10">
//                 <Twitter />
//               </IconButton>
//               <IconButton className="text-[#0A66C2] hover:bg-[#0A66C2]/10">
//                 <LinkedIn />
//               </IconButton>
//             </Stack>
//           </Stack>

//           <Divider sx={{ my: 4 }} />

//           {/* Related Posts */}
//           {relatedPosts.length > 0 && (
//             <Box>
//               <Typography variant="h5" className="font-bold mb-6">
//                 More posts
//               </Typography>
//               <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
//                 {relatedPosts.map((relatedPost) => (
//                   <RelatedPostCard key={relatedPost.id} {...relatedPost} />
//                 ))}
//               </Stack>
//             </Box>
//           )}
//         </Stack>
//       </Container>
//     </main>
//   );
// };

// export default SinglePost;


// // "use client"
// // import type React from "react"
// // import { useEffect, useState } from "react"
// // import { Container, Typography, Stack, Box, Chip, Divider, CircularProgress } from "@mui/material"
// // import Image from "next/image"
// // import { Facebook, Twitter, LinkedIn } from "@mui/icons-material"
// // import IconButton from "./icon-button"
// // import type { Post } from "../../types/post"
// // import RelatedPostCard from "./RelatedPostCard"
// // import { getPostDetails, getSimilarPosts } from "../../lib/graphql-api"
// // import SinglePostSkeleton from "./SinglePostSkeleton"

// // interface SinglePostProps {
// //   slug: string
// // }

// // const SinglePost: React.FC<SinglePostProps> = ({ slug }) => {
// //   const [post, setPost] = useState<Post | null>(null)
// //   const [relatedPosts, setRelatedPosts] = useState<Post[]>([])
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState<string | null>(null)

// //   useEffect(() => {
// //     const fetchPostData = async () => {
// //       try {
// //         setLoading(true)
// //         const postData: any = await getPostDetails(slug)
// //         console.log("postdata", postData)
// //         setPost(postData.post)
// //         const similarPosts: any = await getSimilarPosts(slug, postData.post.category || "")
// //         console.log("similardata", similarPosts)
// //         setRelatedPosts(similarPosts && similarPosts.posts.length >= 2 ? similarPosts.posts.slice(0, 3) : similarPosts)
// //       } catch (err) {
// //         setError("Failed to load post data")
// //         console.error("Error fetching post data:", err)
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     fetchPostData()
// //   }, [slug])

// //   // if (loading) {
// //   //   return (
// //   //     <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 }, display: "flex", justifyContent: "center" }}>
// //   //       <CircularProgress />
// //   //     </Container>
// //   //   )
// //   // }
// //   if (loading) {
// //     return <SinglePostSkeleton />
// //   }

// //   if (error || !post) {
// //     return (
// //       <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
// //         <Typography color="error">{error || "Post not found"}</Typography>
// //       </Container>
// //     )
// //   }

// //   return (
// //     <main className="min-h-screen bg-white">
// //       {/* Blog Content */}
// //       <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
// //         <Stack spacing={4}>
// //           {/* Category and Title */}
// //           <Stack spacing={2}>
// //             <Chip
// //               label={post.category || "Uncategorized"}
// //               sx={{
// //                 bgcolor: "#7250e224",
// //                 color: "#7250E2",
// //                 borderRadius: "16px",
// //                 width: "fit-content",
// //               }}
// //             />
// //             <Typography variant="h4" className="text-xl md:text-4xl font-bold">
// //               {post.title}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               {new Date(post.createdAt).toLocaleDateString("en-US", {
// //                 year: "numeric",
// //                 month: "long",
// //                 day: "numeric",
// //               })}
// //             </Typography>
// //           </Stack>

// //           {/* Featured Image */}
// //           <Box className="relative w-full aspect-[16/9] md:aspect-[23/9] rounded-lg overflow-hidden">
// //             <Image src={post.featuredImage?.url || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
// //           </Box>

// //           {/* Article Content */}
// //           <Box className="prose prose-lg max-w-none">
// //             {/* <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
// //               {post.content}
// //             </Typography> */}

// //             <div dangerouslySetInnerHTML={{ __html: post.content?.html || "" }} className="blog-content" />

// //             {post.quote && (
// //               <Box className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
// //                 <Typography variant="body1" className="italic text-gray-600">
// //                   {post.quote}
// //                 </Typography>
// //               </Box>
// //             )}
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
// //           {relatedPosts.length > 0 && (
// //             <Box>
// //               <Box  className="text-2xl xs:text-xl font-bold mb-6">
// //                 More posts
// //               </Box>
// //               <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
// //                 {relatedPosts.map((relatedPost) => (
// //                   <RelatedPostCard key={relatedPost.id} {...relatedPost} />
// //                 ))}
// //               </Stack>
// //             </Box>
// //           )}
// //         </Stack>
// //       </Container>
// //     </main>
// //   )
// // }

// // export default SinglePost


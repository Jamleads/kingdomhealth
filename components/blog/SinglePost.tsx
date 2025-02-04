"use client"
import type React from "react"
import { useEffect, useState } from "react"
import { Container, Typography, Stack, Box, Chip, Divider, CircularProgress } from "@mui/material"
import Image from "next/image"
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material"
import IconButton from "./icon-button"
import type { Post } from "../../types/post"
import RelatedPostCard from "./RelatedPostCard"
import { getPostDetails, getSimilarPosts } from "../../lib/graphql-api"
import SinglePostSkeleton from "./SinglePostSkeleton"

interface SinglePostProps {
  slug: string
}

const SinglePost: React.FC<SinglePostProps> = ({ slug }) => {
  const [post, setPost] = useState<Post | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true)
        const postData: any = await getPostDetails(slug)
        console.log("postdata", postData)
        setPost(postData.post)
        const similarPosts: any = await getSimilarPosts(slug, postData.post.category || "")
        console.log("similardata", similarPosts)
        setRelatedPosts(similarPosts && similarPosts.posts.length >= 2 ? similarPosts.posts.slice(0, 3) : similarPosts)
      } catch (err) {
        setError("Failed to load post data")
        console.error("Error fetching post data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPostData()
  }, [slug])

  // if (loading) {
  //   return (
  //     <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 }, display: "flex", justifyContent: "center" }}>
  //       <CircularProgress />
  //     </Container>
  //   )
  // }
  if (loading) {
    return <SinglePostSkeleton />
  }

  if (error || !post) {
    return (
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
        <Typography color="error">{error || "Post not found"}</Typography>
      </Container>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Blog Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
        <Stack spacing={4}>
          {/* Category and Title */}
          <Stack spacing={2}>
            <Chip
              label={post.category || "Uncategorized"}
              sx={{
                bgcolor: "#7250e224",
                color: "#7250E2",
                borderRadius: "16px",
                width: "fit-content",
              }}
            />
            <Typography variant="h4" className="text-xl md:text-4xl font-bold">
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
          <Box className="relative w-full aspect-[16/9] md:aspect-[23/9] rounded-lg overflow-hidden">
            <Image src={post.featuredImage?.url || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </Box>

          {/* Article Content */}
          <Box className="prose prose-lg max-w-none">
            {/* <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
              {post.content}
            </Typography> */}

            <div dangerouslySetInnerHTML={{ __html: post.content?.html || "" }} className="blog-content" />

            {post.quote && (
              <Box className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <Typography variant="body1" className="italic text-gray-600">
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
              <IconButton className="text-[#1877F2] hover:bg-[#1877F2]/10">
                <Facebook />
              </IconButton>
              <IconButton className="text-[#1DA1F2] hover:bg-[#1DA1F2]/10">
                <Twitter />
              </IconButton>
              <IconButton className="text-[#0A66C2] hover:bg-[#0A66C2]/10">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Stack>

          <Divider sx={{ my: 4 }} />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <Box>
              <Box  className="text-2xl xs:text-xl font-bold mb-6">
                More posts
              </Box>
              <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
                {relatedPosts.map((relatedPost) => (
                  <RelatedPostCard key={relatedPost.id} {...relatedPost} />
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      </Container>
    </main>
  )
}

export default SinglePost


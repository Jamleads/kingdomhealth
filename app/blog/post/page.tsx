// pages/blog/post/[slug].tsx
import { useRouter } from "next/router";
import { Container, Typography, Stack, Box, Chip } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import { getPostDetails, getPosts } from "@/lib/graphql-api";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const postData: any = await getPostDetails(params.slug);
  const post = postData?.post;

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Head>
        <title>{post.title} | Kingdom Health</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage.url} />
        <meta property="og:url" content={`https://kingdomhealth.vercel.app/blog/post/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="min-h-screen bg-white">
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
          <Stack spacing={4}>
            <Chip label={post.category} sx={{ bgcolor: "#7250e224", color: "#7250E2" }} />
            <Typography variant="h3" className="text-2xl md:text-4xl font-bold">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(post.createdAt).toDateString()}
            </Typography>
            <Box className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image src={post.featuredImage.url} alt={post.title} fill className="object-cover" />
            </Box>
            <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
              {post.content}
            </Typography>
          </Stack>
        </Container>
      </main>
    </>
  );
};

export async function generateStaticParams() {
  const data: any = await getPosts();
  const posts = data?.posts || [];

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default BlogPost;

// import Posts from "@/components/blog/Posts"
// import { Container, Stack } from "@mui/material"
// import React from "react"

// const Blog = () => {
//   return (
//     <main className="flex flex-col ">
//       <Container maxWidth="lg" className="py-16">
//         <Stack spacing={4}>
//          <Posts/>
//         </Stack>
//       </Container>
//     </main>
//   )
// }

// export default Blog


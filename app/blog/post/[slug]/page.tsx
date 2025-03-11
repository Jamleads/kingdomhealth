import { Metadata } from "next";
import { getPostBySlug } from "@/lib/graphql-api";
import SinglePost from "@/components/blog/SinglePost";

interface PostPageProps {
  params: { slug: string };
}

// Generate dynamic metadata for SEO and social sharing
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  // console.log("post", post)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "Read more about this article.",
    openGraph: {
      title: post.title,
      description: post.excerpt || "Read this article on our blog.",
      url: `https://kingdomhealth.vercel.app/blog/post/${params.slug}`,
      type: "article",
      images: [
        {
          url: post.featuredImage?.url || "/img2.png.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "Check out this post!",
      images: [post.featuredImage?.url || "/img2.png"],
    },
  };
}

// Page Component
export default async function PostPage({ params }: PostPageProps) {
  return (
    <main className="flex flex-col">
      <SinglePost slug ={params.slug} />
    </main>
  );
}

// import type React from "react"
// import { Container, Stack } from "@mui/material"
// import SinglePost from "@/components/blog/SinglePost"

// // const PostPage: React.FC = () => {
// //   const router = useRouter()
// //   const { slug } = router.query

// //   return <div>{slug && <SinglePost slug={slug as string} />}</div>
// // }

// // export default PostPage

// export default async function PostPage({ params }: { params: { slug: string } }) {
//   return (
//     <main className="flex flex-col ">
//     <Container maxWidth="lg" className="py-16">
//       <Stack spacing={4}>
//          {params.slug && <SinglePost slug={params.slug as string} />}
//         </Stack>
//         </Container>
//       </main>
//   )
// }
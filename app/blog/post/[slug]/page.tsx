import { Metadata } from "next";
import { getPostBySlug } from "@/lib/graphql-api";
import SinglePost from "@/components/blog/SinglePost";

interface PostPageProps {
  params: { slug: string };
}

// Generate dynamic metadata for SEO and social sharing
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  console.log("Fetched Post:", post); // Debugging log

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  const imageUrl = post.featuredImage?.url ?? "/fallback-image.jpg"; // Ensure valid image

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
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

// Page Component
export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p>The requested post could not be found. Please check the URL or browse other articles.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      <SinglePost slug={params.slug} />
    </main>
  );
}

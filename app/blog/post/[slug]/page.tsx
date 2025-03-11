import { Metadata } from "next";
import { getPostBySlug } from "@/lib/graphql-api";
import SinglePost from "@/components/blog/SinglePost";

interface PostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  const baseUrl = "https://kingdomhealth.vercel.app"; // Change this to your actual domain
  const imageUrl = post.featuredImage?.url ? post.featuredImage.url : `${baseUrl}/default-og-image.jpg`;

  return {
    title: post.title,
    description: post.excerpt || "Read this article on our blog.",
    openGraph: {
      title: post.title,
      description: post.excerpt || "Read this article on our blog.",
      url: `${baseUrl}/blog/post/${params.slug}`,
      type: "article",
      images: [
        {
          url: imageUrl, // Make sure this is a full URL
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

export default async function PostPage({ params }: PostPageProps) {
  return (
    <main className="flex flex-col">
      <SinglePost slug={params.slug} />
    </main>
  );
}


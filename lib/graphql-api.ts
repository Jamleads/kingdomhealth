"use server"
import { GraphQLClient } from "graphql-request"
import {
  GET_ALL_POSTS,
  GET_POST_BY_SLUG,
  GET_RECENT_POSTS,
  GET_FEATURED_POSTS,
  GET_SIMILAR_POSTS,
} from "../graphql/queries"
import type { Post } from "../types/post"

const url = process.env.NEXT_PUBLIC_HYGRAPH_API_URL || ""
const token = process.env.HYGRAPH_TOKEN

const client = new GraphQLClient(url)

const makeGraphQLRequest = async <T>(query: string, variables = {}): Promise<T> => {
  try {
    client.setHeader("Authorization", `Bearer ${token}`)
    return await client.request<T>(query, variables)
  } catch (error) {
    console.error("GraphQL request failed:", error)
    if (error instanceof Error) {
      throw new Error(`GraphQL request failed: ${error.message}`)
    }
    throw new Error("An unknown error occurred during the GraphQL request")
  }
}

export const getPosts = async (): Promise<{ posts: Post[] }> => {
  return makeGraphQLRequest<{ posts: Post[] }>(GET_ALL_POSTS)
}

export const getPostDetails = async (slug: string): Promise<Post | null> => {
  try {
    const data = await makeGraphQLRequest<{ post: Post | null }>(GET_POST_BY_SLUG, { slug })
    return data.post
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error)
    return null
  }
}

export const getRecentPosts = async (first = 5): Promise<Post[]> => {
  try {
    const data = await makeGraphQLRequest<{ posts: Post[] }>(GET_RECENT_POSTS, { first })
    return data.posts
  } catch (error) {
    console.error("Failed to fetch recent posts:", error)
    return []
  }
}

export const getFeaturedPosts = async (): Promise<{ posts: Post[] }> => {
  return makeGraphQLRequest<{ posts: Post[] }>(GET_FEATURED_POSTS)
}

export const getSimilarPosts = async (slug: string, category: string): Promise<Post[]> => {
  try {
    const data = await makeGraphQLRequest<{ posts: Post[] }>(GET_SIMILAR_POSTS, { slug, category })
    return data.posts
  } catch (error) {
    console.error("Failed to fetch similar posts:", error)
    return []
  }
}
// ✅ Add this function & export it properly
export const getPostBySlug = async (slug: string) => {
  try {
    const data: any = await makeGraphQLRequest(GET_POST_BY_SLUG, { slug });
    return data.post;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
};
// "use server"
// import { GraphQLClient } from "graphql-request"
// import {
//   GET_ALL_POSTS,
//   GET_POST_BY_SLUG,
//   GET_RECENT_POSTS,
//   GET_FEATURED_POSTS,
//   GET_SIMILAR_POSTS,
// } from "../graphql/queries"

// const url = process.env.NEXT_PUBLIC_HYGRAPH_API_URL || ""
// const token = process.env.HYGRAPH_TOKEN

// const client = new GraphQLClient(url)

// const makeGraphQLRequest = async (query: string, variables = {}) => {
//   try {
//     client.setHeader("Authorization", `Bearer ${token}`)
//     return await client.request(query, variables)
//   } catch (error) {
//     console.error("GraphQL request failed:", error)
//     if (error instanceof Error) {
//       throw new Error(`GraphQL request failed: ${error.message}`)
//     }
//     throw new Error("An unknown error occurred during the GraphQL request")
//   }
// }

// export const getPosts = async () => {
//   return makeGraphQLRequest(GET_ALL_POSTS)
// }

// export const getPostDetails = async (slug: string) => {
//   return makeGraphQLRequest(GET_POST_BY_SLUG, { slug })
// }

// export const getRecentPosts = async (first = 5) => {
//   try {
//     const data :any = await makeGraphQLRequest(GET_RECENT_POSTS, { first })
//     return data.posts
//   } catch (error) {
//     console.error("Failed to fetch recent posts:", error)
//     return []
//   }
// }

// export const getFeaturedPosts = async () => {
//   return makeGraphQLRequest(GET_FEATURED_POSTS)
// }

// export const getSimilarPosts = async (slug: string, category: string) => {
//   return makeGraphQLRequest(GET_SIMILAR_POSTS, { slug, category })
// }

// export async function getPostBySlug(slug: string) {
//   try {
//     const data : any = await makeGraphQLRequest(GET_POST_BY_SLUG, { slug });
//     return data.post;
//   } catch (error) {
//     console.error(`Error fetching post with slug "${slug}":`, error);
//     return null;
//   }
// }

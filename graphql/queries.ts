import { gql } from "graphql-request"

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      category
      excerpt
      featured
      slug
      quote
      title
       featuredImage {
        url
      }
        createdAt
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      category
      excerpt
      featured
       content {
      html
    }
      slug
      quote
      title
       featuredImage {
        url
      }
        createdAt
    }
  }
`

export const GET_RECENT_POSTS = gql`
  query GetRecentPosts($first: Int!) {
    posts(orderBy: createdAt_DESC, first: $first) {
      id
      title
      excerpt
      slug
      createdAt
      category
      featuredImage {
        url
      }
        createdAt
    }
  }
`

export const GET_FEATURED_POSTS = gql`
  query GetFeaturedPosts {
    posts(where: { featured: true }) {
      id
      title
      excerpt
      slug
      category
      featured
      quote
       featuredImage {
        url
      }
        createdAt
    }
  }
`

export const GET_SIMILAR_POSTS = gql`
  query GetSimilarPosts($slug: String!, $category: String!) {
    posts(
      where: {slug_not: $slug, AND: {category: $category}}
      first: 3
    ) {
      id
      title
      excerpt
      slug
      category
       featuredImage {
        url
      }
        createdAt
    }
  }
`




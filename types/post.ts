export interface Post {
    id: string
    category: string
    excerpt?: string
    featured?: boolean
    slug: string
    quote?: string
    title: string
    content?: {
      html: string
    }
    createdAt: string
    featuredImage?: {
        url: string
      }
  }
  
  export interface AllPostsData {
    posts: Post[]
  }
  
  export interface SinglePostData {
    post: Post
  }
  
  
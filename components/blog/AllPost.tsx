"use client"
import type React from "react"
import { useEffect, useState } from "react"
import { getPosts } from "../../lib/graphql-api"
import type { Post } from "../../types/post"
import Link from "next/link"

const AllPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data:any = await getPosts()
        setPosts(data.posts)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch posts")
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <Link href={`/post/${post.slug}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}

export default AllPosts


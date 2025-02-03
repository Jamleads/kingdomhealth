
import type React from "react"
import { Container, Stack } from "@mui/material"
import SinglePost from "@/components/blog/SinglePost"

// const PostPage: React.FC = () => {
//   const router = useRouter()
//   const { slug } = router.query

//   return <div>{slug && <SinglePost slug={slug as string} />}</div>
// }

// export default PostPage

export default async function PostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col ">
    <Container maxWidth="lg" className="py-16">
      <Stack spacing={4}>
         {params.slug && <SinglePost slug={params.slug as string} />}
        </Stack>
        </Container>
      </main>
  )
}
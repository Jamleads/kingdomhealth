// app/blog/post/page.tsx
import React from "react";
import { Container, Stack } from "@mui/material";
import { getPosts } from "@/lib/graphql-api";
import Posts from "@/components/blog/Posts";

const Blog = async () => {
  const data = await getPosts();

  return (
    <main className="flex flex-col">
      <Container maxWidth="lg" className="py-16">
        <Stack spacing={4}>
          <Posts posts={data.posts} />
        </Stack>
      </Container>
    </main>
  );
};

export default Blog;

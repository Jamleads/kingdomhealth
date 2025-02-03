"use client"
import type React from "react"
import { Typography, Stack, Chip, Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import type { Post } from "../../types/post"

const RelatedPostCard: React.FC<Post> = ({ title, excerpt, category, createdAt, featuredImage, slug }) => {
  return (
    <Stack spacing={2} sx={{ flex: "1 1 33.33%" }}>
      <Box className="relative aspect-[16/9] rounded-lg overflow-hidden">
        <Image src={featuredImage?.url || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Chip
          label={category || "Uncategorized"}
          sx={{
            bgcolor: "#7250e224",
            color: "#7250E2",
            borderRadius: "16px",
          }}
        />
        <Typography variant="body2" color="text.secondary">
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>
      </Stack>
      <Typography variant="h6" className="font-semibold">
        {title}
      </Typography>
      <Link href={`/blog/${slug}`} passHref>
        <Chip
          label="Read Post"
          variant="outlined"
          clickable
          sx={{
            alignSelf: "flex-start",
            color: "#20BEB8",
            borderColor: "#20BEB8",
            "&:hover": {
              backgroundColor: "#20BEB8",
              color: "white",
            },
          }}
        />
      </Link>
    </Stack>
  )
}

export default RelatedPostCard


import type React from "react"
import { Stack, Box, Skeleton } from "@mui/material"

const FeaturedPostSkeleton: React.FC = () => {
  return (
    <Stack direction={{ xs: "column", md: "row-reverse" }} spacing={4}>
      <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 25%", lg: "0 0 20%" } }}>
        <Skeleton variant="rectangular" height={56} sx={{ borderRadius: "8px" }} />
      </Box>
      <Stack spacing={4} sx={{ flex: "1 1 auto" }}>
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={200} />
        <Stack direction={{ xs: "column", md: "column" }} spacing={4}>
          {[...Array(2)].map((_, index) => (
            <Stack key={index} spacing={2} sx={{ flex: "1 1 50%" }} direction={{ xs: "column", md: "row" }} gap={2}>
              <Skeleton variant="rectangular" width={400} height={300} sx={{ borderRadius: "8px" }} />
              <Stack direction="column" justifyContent="space-between" gap={2} sx={{ flex: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Skeleton variant="rectangular" width={100} height={32} sx={{ borderRadius: "16px" }} />
                  <Skeleton variant="text" width={100} />
                </Stack>
                <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
                <Skeleton variant="text"  />
                <Skeleton variant="text"  />
                <Skeleton variant="rectangular" width={100} height={36} sx={{ borderRadius: "9999px" }} />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FeaturedPostSkeleton


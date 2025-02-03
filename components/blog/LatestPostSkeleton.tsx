import type React from "react"
import { Box, Stack, Skeleton } from "@mui/material"

const LatestPostSkeleton: React.FC = () => {
  return (
    <Box>
      <Skeleton variant="text" sx={{ fontSize: "1.5rem", width: 200, mb: 4 }} />
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        {[...Array(3)].map((_, index) => (
          <Stack key={index} spacing={2} sx={{ flex: "1 1 33.33%" }}>
            <Skeleton variant="rectangular" width="100%" height={225} sx={{ borderRadius: "8px" }} />
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Skeleton variant="rectangular" width={100} height={32} sx={{ borderRadius: "16px" }} />
              <Skeleton variant="text" width={100} />
            </Stack>
            <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="rectangular" width={100} height={36} sx={{ borderRadius: "9999px" }} />
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}

export default LatestPostSkeleton


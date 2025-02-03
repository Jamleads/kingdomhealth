import type React from "react"
import { Container, Stack, Box, Skeleton } from "@mui/material"

const SinglePostSkeleton: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 8 } }}>
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Skeleton variant="rectangular" width={100} height={32} sx={{ borderRadius: "16px" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} width="80%" />
          <Skeleton variant="text" width={150} />
        </Stack>

        <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: "8px" }} />

        <Stack spacing={2}>
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} variant="text" sx={{ fontSize: "1rem" }} />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="text" width={150} />
          <Stack direction="row" spacing={1}>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} variant="circular" width={40} height={40} />
            ))}
          </Stack>
        </Stack>

        <Skeleton variant="rectangular" width="100%" height={1} />

        <Box>
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={200} />
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ mt: 2 }}>
            {[...Array(3)].map((_, index) => (
              <Box key={index} sx={{ flex: "1 1 33.33%" }}>
                <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: "8px" }} />
                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Skeleton variant="text" width={100} />
                  <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="rectangular" width={100} height={36} sx={{ borderRadius: "9999px" }} />
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default SinglePostSkeleton


import { Skeleton, Stack } from "@mui/material"

export function BlogPostSkeleton() {
  return (
    <Stack spacing={3}>
      <Skeleton variant="rectangular" width="100%" height={240} sx={{ borderRadius: 2 }} />
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Skeleton variant="rounded" width={100} height={32} />
          <Skeleton variant="text" width={120} />
        </Stack>
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }}  />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }}  />
        <Skeleton variant="rounded" width={100} height={36} />
      </Stack>
    </Stack>
  )
}


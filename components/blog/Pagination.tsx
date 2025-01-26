"use client"
import type React from "react"
import { Stack, Button, useMediaQuery, useTheme } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const renderPageButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          variant={currentPage === i ? "contained" : "outlined"}
          onClick={() => handlePageChange(i)}
          sx={{
            minWidth: "40px",
            height: "40px",
            borderRadius: "20px",
          }}
        >
          {i}
        </Button>,
      )
    }
    return buttons
  }

  return (
    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{
          minWidth: "40px",
          height: "40px",
          borderRadius: "20px",
        }}
      >
        <ChevronLeft />
      </Button>
      {!isMobile && renderPageButtons()}
      {isMobile && (
        <Button
          variant="outlined"
          sx={{
            minWidth: "40px",
            height: "40px",
            borderRadius: "20px",
          }}
        >
          {currentPage} of {totalPages}
        </Button>
      )}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{
          minWidth: "40px",
          height: "40px",
          borderRadius: "20px",
        }}
      >
        <ChevronRight />
      </Button>
    </Stack>
  )
}

export default Pagination


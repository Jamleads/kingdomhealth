"use client"
import { IconButton as MuiIconButton } from "@mui/material"
import { styled } from "@mui/material/styles"

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 20,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}))

export default IconButton


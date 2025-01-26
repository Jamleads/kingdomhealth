
"use client"

import type React from "react"
import { useState } from "react"
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  type SelectChangeEvent,
  Stack,
  Typography,
  Chip,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"

// Mock data for blog categories
const blogCategories = ["Technology", "Travel", "Food", "Lifestyle", "Fashion", "Health"]

const SearchBar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string)
  }

  return (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: "100%" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by Keywords"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
            backgroundColor: "white",
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(0, 0, 0, 0.87)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />

      {isMobile ? (
        // Mobile view: Dropdown
        <FormControl fullWidth variant="outlined">
          <InputLabel id="category-select-label">Categories</InputLabel>
          <Select
            labelId="category-select-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Categories"
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "16px",
              },
            }}
          >
            {blogCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        // Desktop view: Chip list
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight="bold">
            Blog Categories
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {blogCategories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? "primary" : "default"}
                sx={{
                  cursor: "pointer",
                  borderRadius: "16px",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  )
}

export default SearchBar

// "use client"

// import type React from "react"
// import { useState } from "react"
// import { TextField, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material"

// // Mock data for blog categories
// const blogCategories = ["Technology", "Travel", "Food", "Lifestyle", "Fashion", "Health"]

// const SearchBar: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("")

//   const handleCategoryChange = (event :  SelectChangeEvent ) => {
//     setSelectedCategory(event.target.value as string)
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto pb-4 ">
//       <div className="rounded-xl">
//       <TextField fullWidth variant="outlined" placeholder="Search by Keywords" className="mb-4  bg-white" />
//       </div>
//       {/* Mobile view: Dropdown */}
//       <div className="md:hidden">
//         <FormControl fullWidth variant="outlined">
//           <InputLabel id="category-select-label">Categories</InputLabel>
//           <Select
//             labelId="category-select-label"
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//             label="Categories"
//             className=' bg-white'
//           >
//             {blogCategories.map((category) => (
//               <MenuItem key={category} value={category}>
//                 {category}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </div>

//       {/* Desktop view: List */}
//       <div className="hidden md:block">
//         <h2 className="text-xl font-semibold mb-2">Blog Categories</h2>
//         <ul className="space-y-2">
//           {blogCategories.map((category) => (
//             <li key={category} className="cursor-pointer hover:text-blue-600 transition-colors">
//               {category}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default SearchBar


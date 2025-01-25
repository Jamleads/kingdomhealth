"use client"

import type React from "react"
import { useState } from "react"
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material"

// Mock data for blog categories
const blogCategories = ["Technology", "Travel", "Food", "Lifestyle", "Fashion", "Health"]

const SearchBar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value as string)
  }

  return (
    <div className="w-full max-w-4xl mx-auto pb-4 ">
      <div className="rounded-xl">
      <TextField fullWidth variant="outlined" placeholder="Search by Keywords" className="mb-4  bg-white" />
      </div>
      {/* Mobile view: Dropdown */}
      <div className="md:hidden">
        <FormControl fullWidth variant="outlined">
          <InputLabel id="category-select-label">Categories</InputLabel>
          <Select
            labelId="category-select-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Categories"
            className=' bg-white'
          >
            {blogCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Desktop view: List */}
      <div className="hidden md:block">
        <h2 className="text-xl font-semibold mb-2">Blog Categories</h2>
        <ul className="space-y-2">
          {blogCategories.map((category) => (
            <li key={category} className="cursor-pointer hover:text-blue-600 transition-colors">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchBar


import { Container, Stack } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Container
    maxWidth='lg'
    >
    <Stack 
        direction={'row'}  
        className='flex flex-col md:flex-row  gap-2 max-sm:text-center justify-between items-center'  
    >
        <div className='font-semibold text-2xl md:text-[25px] '>News & Insights</div>
        <p className='font-extralight max-sm:text-center max-w-[460px] md:pt-3'>
        Stay informed with Medicare&#39;s blog - expert health tips, wellness advice, and patient stories designed to empower you and guide your healthcare journey.
        </p>
    </Stack>
    </Container>
  )
}

export default Header
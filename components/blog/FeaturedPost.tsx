import React from "react"
import SearchBar from "./SearchBar"
import { Typography, Box, Chip, Stack } from "@mui/material"
import Image from "next/image"

const FeaturedPost = () => {
    return (
        <Stack direction={{ xs: "column", md: "row-reverse" }} spacing={4}>
            <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 25%", lg: "0 0 20%" } }}>
                <SearchBar />
            </Box>
            <Stack spacing={4} sx={{ flex: "1 1 auto" }}>
                <Typography variant="h5" component="h2" >
                    Featured Posts
                </Typography>
                <Stack direction={{ xs: "column", md: "column" }} spacing={4}>
                    {["/lp1.png", "/img2.png"].map((img, index) => (
                        <Stack key={index} spacing={2}
                            sx={{ flex: "1 1 50%" }}
                            direction={{ xs: 'column', md: 'row' }}
                            gap={2}
                        >

                            <Image src={img || "/placeholder.svg"} alt="post image" width={400} height={300}

                            // layout="responsive"
                            />
                            <Stack
                                direction={'column'}
                                justifyContent={'space-between'}
                                gap={2}
                            >
                                <Stack direction="row" justifyContent={{ xs: "space-between", md: "start" }}
                                    spacing={4}
                                    alignItems="center"
                                    >
                                    <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
                                        <Chip label={index === 0 ? "News & Insights" : "Women's Health"}
                                        />
                                    </div>
                                    <Typography variant="body2" color="text.secondary">
                                        December 20th, 2025
                                    </Typography>
                                </Stack>
                                <Typography variant="h6" component="h3">
                                    {index === 0
                                        ? "Digital Tracking Technologies & HIPAA: Latest Updates and Ongoing Risks"
                                        : "Empowering wellness throughout every Stage of a Woman's Life"}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {index === 0
                                        ? "Are the digital tracking technologies you use for your website and healthcare marketing practices fully compliant with HIPAA regulations and digital tracking standards? You might think so, but even 'industry standards' like the Google Analytics (G4) and Meta pixels are not compliant."
                                        : "Women's health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a woman goes through in her lifetime. Given the complexity and diversity of women's health issues."}
                                </Typography>
                                {/* <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit '>
                                <Chip label="Read Post" variant="outlined"  clickable sx={{ alignSelf: "flex-start" }} />
                                </div> */}
                                <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
                                    Read Post
                                </div>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FeaturedPost



// import React from 'react'
// import SearchBar from './SearchBar'
// import { Container } from '@mui/material'
// import Image from 'next/image'
// // import Posts from './Posts'

// const FeaturedPost = () => {
//     return (
//         <Container
//             maxWidth='lg'
//         >
//             <div className='flex flex-col md:flex-row justify-between gap-3'>
//                 <SearchBar />
//                 <div className='flex flex-col gap-5'>
//                     <h1
//                         className='flex font-semibold text-xl'
//                     >Featured Posts</h1>
//                     <div>
//                         <div className='flex flex-col justify-center align-middle gap-3'>
//                             <div className='flex '>
//                                 <Image
//                                     src={'/lp1.png'}
//                                     alt='post image'
//                                     width={200}
//                                     height={200}
//                                     className='w-[250rem] md:w-[330rem] mt-1 '
//                                 />
//                             </div>
//                             <div className='flex flex-row justify-around align-middle'>
//                                 <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
//                                     News & Insights
//                                 </div>
//                                 <div className='p-1 text-[#64748B]'>
//                                     December 20th, 2025
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className='flex flex-col gap-4'>
//                                     <div className='flex flex-col gap-3 mt-3'>
//                                         <h1 className='font-semibold text-[25px]  text-[#0F172A]'>
//                                             Digital Tracking Technologies & HIPAA: Latest Updates and Ongoing Risks
//                                         </h1>
//                                         <p className='text-[#64748B]'>
//                                             Are the digital tracking technologies you use for your website and healthcare marketing practices fully compliant with HIPAA regulations and digital tracking standards? You might think so, but even “industry standards” like the Google Analytics (G4) and Meta pixels are not compliant.
//                                         </p>
//                                         <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
//                                             Read Post
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* 2nd featured post */}

//                     <div>
//                         <div className='flex flex-col justify-center align-middle gap-3'>
//                             <div className='flex '>
//                                 <Image
//                                     src={'/img2.png'}
//                                     alt='post image'
//                                     width={200}
//                                     height={200}
//                                     className='w-[250rem] md:w-[330rem] mt-1 '
//                                 />
//                             </div>
//                             <div className='flex flex-row justify-around align-middle'>
//                                 <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
//                                     Women&#39;s Health
//                                 </div>
//                                 <div className='p-1 text-[#64748B]'>
//                                     December 20th, 2025
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className='flex flex-col gap-4'>
//                                     <div className='flex flex-col gap-3 mt-3'>
//                                         <h1 className='font-semibold text-[25px]  text-[#0F172A]'>
//                                         Empowering wellness throughout every Stage of a Woman&#39;s Life
//                                         </h1>
//                                         <p className='text-[#64748B]'>
//                                         Women&#39;s health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a woman goes through in her lifetime. Given the complexity and diversity of women&#39;s health issues.
//                                         </p>
//                                         <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
//                                             Read Post
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     )
// }

// export default FeaturedPost
import React from 'react'
import SearchBar from './SearchBar'
import { Container } from '@mui/material'
import Image from 'next/image'
import Posts from './Posts'

const LatestPost = () => {
    return (
        <div className=''>
        <Container
            maxWidth='lg'
            
        >
                <div className='flex flex-col gap-5'>
                    <h1
                        className='flex font-semibold text-xl'
                    >Latest Posts</h1>
                    <div>
                        <div className='flex flex-col justify-center align-middle gap-3'>
                            <div className='flex '>
                                <Image
                                    src={'/limg1.png'}
                                    alt='post image'
                                    width={200}
                                    height={200}
                                    className='w-[250rem] md:w-[330rem] mt-1 '
                                />
                            </div>
                            <div className='flex flex-row justify-around align-middle'>
                                <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
                                    General Health
                                </div>
                                <div className='p-1 text-[#64748B]'>
                                    January 20th, 2025
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-3 mt-3'>
                                        <h1 className='font-semibold text-[25px]  text-[#0F172A]'>
                                           10 Unexpected Ways PCOS Affects Women's Lives
                                        </h1>
                                        <p className='text-[#64748B]'>
                                            Polycystic Ovary Syndrome (PCOS). These three words carry a heavy weight for millions of women...
                                        </p>
                                        <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
                                            Read Post
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd featured post */}

                    <div>
                        <div className='flex flex-col justify-center align-middle gap-3'>
                            <div className='flex '>
                                <Image
                                    src={'/limg2.png'}
                                    alt='post image'
                                    width={200}
                                    height={200}
                                    className='w-[250rem] md:w-[330rem] mt-1 '
                                />
                            </div>
                            <div className='flex flex-row justify-around align-middle'>
                                <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
                                    Men's Health
                                </div>
                                <div className='p-1 text-[#64748B]'>
                                    January 20th, 2025
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-3 mt-3'>
                                        <h1 className='font-semibold text-[25px]  text-[#0F172A]'>
                                        Men's Health Matters: 5 Essential Tips to Boost Men's Health & Build Resilience
                                        </h1>
                                        <p className='text-[#64748B]'>
                                        Men's health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a woman goes through in her lifetime. Given the complexity and diversity of women's health issues.
                                        </p>
                                        <div className='text-[#20BEB8] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
                                            Read Post
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3rd post  */}

                    <div>
                        <div className='flex flex-col justify-center align-middle gap-3'>
                            <div className='flex '>
                                <Image
                                    src={'/limg3.png'}
                                    alt='post image'
                                    width={200}
                                    height={200}
                                    className='w-[250rem] md:w-[330rem] mt-1 '
                                />
                            </div>
                            <div className='flex flex-row justify-around align-middle'>
                                <div className='text-[#7250E2] p-1 bg-[#7250e224]'>
                                    General Health
                                </div>
                                <div className='p-1 text-[#64748B]'>
                                    January 22th, 2025
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-3 mt-3'>
                                        <h1 className='font-semibold text-[25px]  text-[#0F172A]'>
                                        Mental Health Warning Signs: When to Seek Professional Help
                                        </h1>
                                        <p className='text-[#64748B]'>
                                        Men's health encompasses a broad spectrum of concerns, reflecting the unique challenges and changes a woman goes through in her lifetime. Given the complexity and diversity of women's health issues.
                                        </p>
                                        <div className='text-[#4bf7f1] border border-solid border-[#20BEB8] bg-white p-1 px-3 w-fit rounded-full'>
                                            Read Post
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        </div>
    )
}

export default LatestPost
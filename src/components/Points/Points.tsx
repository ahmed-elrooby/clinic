import React from 'react'
import Image from 'next/image';
import { CiCalendar } from "react-icons/ci";
import Link from 'next/link';

import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SliderButtons from './SliderButtons';

const Points = () => {
    return <>
        <div className='my-[50px  '>
            <div className='w-[97%] pt-[50px] mx-auto  '>
                <h1 className='text-[20px] capitalize font-bold my-2'>Your Points, Your Gift!</h1>
                <p className=''>Collect points and redeem them for exclusive discounts and endless offers! </p>

                <div className=''>
                  


                    <Swiper
                        spaceBetween={15}
                        slidesPerView={3}
                        speed={1000}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay,Navigation,]}
                        className=" mySwiper  "
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                    >
                            <SliderButtons  />
             
                            <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>      <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>      <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>      <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>      <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>      <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>      <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>      <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>      <SwiperSlide>
                            <div className='card transition-all  flex flex-col items-start gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-main bg-white hover:shadow-lg'>
                                <Image className='w-full' src={require("../Images/7.jpg")} alt='img' />
                                <div>
                                    <div className='w-full text-green-800 flex items-center justify-between'>
                                        <span className='flex gap-1 capitalize items-center text-[14px]'><CiCalendar /> 19 October 2024
                                        </span>
                                        <span className='capitalize'>ending on</span>
                                    </div>
                                    <p className='leading-[1.8] mt-[10px] capitalize'><Link  href="/login" className='text-main font-bold'>Login</Link> now and get 400 points plus a 5% discount on your first order</p>

                                </div>
                                <Link className=' ml-auto transition-all hover:bg-blue-400 px-4 py-[8px] rounded-lg bg-main text-white' href="/login">login</Link>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>
        </div>
    </>
}

export default Points




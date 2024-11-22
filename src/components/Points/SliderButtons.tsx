"use client"
import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useSwiper } from 'swiper/react'

const SliderButtons = () => {
    const swiper = useSwiper();
  return <>
  

  <div  className='flex mb-5  justify-end items-center gap-4 z-10  absolute top-0 right-0 mt-2'>
                        <button onClick={()=>{swiper.slideNext()}} className='cursor-pointer bg-[#ECEEF0] p-4 transition-all hover:bg-main hover:text-white rounded-full'>
                            <FaArrowLeftLong />
                        </button>
                        <button onClick={() =>{swiper.slidePrev()}} className='bg-[#ECEEF0] cursor-pointer p-4 transition-all hover:bg-main hover:text-white rounded-full'>
                            <FaArrowRightLong />
                        </button>
                    </div>
  </>
}

export default SliderButtons
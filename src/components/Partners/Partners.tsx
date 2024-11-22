import Image from 'next/image'
import React, { useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Partners = () => {
  const [pop, setPop] = useState(false)

  return (
    <>
      <div>
        <h1 className="text-[22px] capitalize font-bold text-center mb-3 text-main">Our Partners</h1>
        <div className=" relative">
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
<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>
<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>

<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>
<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>
<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>
<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>
<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>
<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>
<SwiperSlide>
<div
          onClick={() => setPop(true)}
            className="border cursor-pointer"
          >
            <Image className="object-cover" src={require("../Images/doc3.jpg")} alt="img" />
            <div className="flex flex-col gap-2 items-start mt-2 p-2">
              <h1 className="capitalize font-bold">name of company</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
         
          </div>
</SwiperSlide>



</Swiper>

          {pop && (
              <div className="absolute z-50 w-full h-[200px] md:h-1/2 md:w-[50%]  top-[80px] right-1/2 translate-x-1/2 p-2 text-white bg-opacity-50 bg-black">
                <h1>title</h1>
                <p>anything</p>
                <span
                 onClick={() => {
                    setPop(false) 
                  }}
                  className="absolute -top-2 -right-2 cursor-pointer h-[30px] flex items-center justify-center md:w-[30px] rounded-full bg-main text-white font-bold py-2 px-3"
                >
                  x
                </span>
              </div>
            )}
          {/* Repeated partner items */}
          
        </div>
      </div>
    </>
  )
}

export default Partners

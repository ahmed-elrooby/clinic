"use client"
import Image from 'next/image'
import React from 'react'
import img1 from "../Images/13.jpg"
import img2 from "../Images/7.jpg"
import img3 from "../Images/13.jpg"

import { motion } from "framer-motion";
const Blog = () => {
  return <>
    <div className='py-[50px] '>
      <div className='md:w-[80%] w-[95%]  mx-auto'>
   <div className='bg-white p-4'>
   <motion.h1 
    initial={{scale:0.5}}
    transition={{duration:0.6,
      type:'tween'
    }}
    whileInView={{
      scale:1
    }}
   
   className='mb-[30px]   text-[22px] font-bold capitalize'>title of article title of article </motion.h1>
   <motion.div
initial={{ scale: 0.5 }}
transition={{
    duration: 0.7,
    type: "tween",
}}
whileInView={{
    scale: 1,
}} 
   className="grid  md:grid-cols-[65%,auto]  grid-cols-1  gap-4 ">
     
            <motion.div
            initial={{translateX:-200}}
            transition={{duration:0.6,
              type:'tween'
            }}
            whileInView={{
              translateX:0
            }}
            className=''>
            <Image alt="gallary" className='h-full  w-full object-cover ' src={img1}/>

            </motion.div>
            <motion.div 
             initial={{translateX:200}}
             transition={{duration:0.6,
               type:'tween'
             }}
             whileInView={{
               translateX:0
             }}
            className="grid grid-cols-2 md:grid-cols-1 h-full  gap-2">
        <Image alt="gallary" src={img2} className='  w-full h-full  object-cover'/>
        <Image alt="gallary" src={img2} className='  w-full h-full  object-cover'/>
            </motion.div>
            
        </motion.div>
        <motion.p
        initial={{ scale: 0.5 }}
        transition={{
            duration: 0.7,
            type: "tween",
        }}
        whileInView={{
            scale: 1,
        }} 
        
        className='my-[40px] capitalize leading-[1.8]'>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores necessitatibus minima minus, maxime voluptate expedita 
          fugit veritatis quos in accusantium amet quidem illum totam repellat, consequuntur, voluptatem 
          eveniet beatae ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, quisquam 
          est porro tempore odio dolorem nulla? Molestiae doloremque aperiam odit quis libero eos quidem,
           aspernatur quia, perspiciatis, provident optio sed. Lorem ipsum dolor sit amet consectetur, 
           adipisicing elit. Odio, accusamus vitae. Provident rem architecto blanditiis neque labore
            quibusdam nulla dignissimos aliquam mollitia vel, laudantium porro ratione esse officiis numquam
             dolorem.</motion.p>
   </div>
   <div className='bg-white mt-5 p-4'>
    <motion.h1 
    initial={{translateY:100}}
    transition={{
        duration:0.7,
        type:"tween"
    }}
    whileInView={{
        translateY:0
    }}
    className='capitalize font-bold text-[22px]'>recomendation articles </motion.h1>
<motion.div
initial={{ translateY:100 ,scale:0.5}}
transition={{
    duration: 0.7,
    type: "tween",
}}
whileInView={{
    translateY: 1,
    scale:1
}} 
className='w-full md:w-[70%]'>
<div className='flex items-start mt-[30px]  border-b-2 pb-4 rounded-none  gap-3'>
<Image alt="gallary" className='h-[80px] w-[80px] object-cover ' src={img3}/> 
<p className='capitalize'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deleniti doloribus cum.</p>
</div>

<div className='flex items-start mt-[30px] w-fit border-b-2 pb-4 rounded-none  gap-3'>
<Image alt="gallary" className='h-[80px] w-[80px] object-cover ' src={img3}/> 
<p className='capitalize'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deleniti doloribus cum.</p>
</div>


<div className='flex items-start mt-[30px] w-fit  rounded-none  gap-3'>
<Image alt="gallary" className='h-[80px] w-[80px] object-cover ' src={img3}/> 
<p className='capitalize'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deleniti doloribus cum.</p>
</div>
</motion.div>
   </div>
      </div>
    </div>
  </>
}

export default Blog
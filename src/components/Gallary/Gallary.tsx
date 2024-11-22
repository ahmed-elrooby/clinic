import Image from 'next/image'
import React from 'react'
import imgone from "../Images/13.jpg"
import imgtwo from "../Images/7.jpg"
import imgthree from "../Images/doc3.jpg"
import imgfour from "../Images/doc4.jpg"
import imgfive from "../Images/doc5.jpg"
import imgsex from "../Images/doctor-detail.jpg"
import {motion} from "framer-motion"
const Gallary = () => {
  return <>
  <div>
    <div className='w-[95%] mx-auto'>
        <motion.h1 
        
        initial={{scale:0.5}}
                transition={{
                    duration:0.7,
                    type:"tween"
                }}
                whileInView={{
                    scale:1
                }}
        className='capitalize text-center my-4 text-main font-bold text-[28px]'>gallary</motion.h1>
        <div className="grid  md:grid-cols-3  grid-cols-1  gap-2 ">
        <motion.div
        initial={{scale:0.5}}
        transition={{
            duration:0.7,
            type:"tween"
        }}
        whileInView={{
            scale:1
        }}
        className="grid grid-rows-1 md:grid-rows-2  gap-2">
        <Image alt="gallary" src={imgone} className='w-full h-full border object-cover"'/>
                <Image alt="gallary" src={imgtwo} className=' border w-full h-full object-cover"  '/>
            </motion.div>
            <motion.div
            initial={{scale:0.5}}
            transition={{
                duration:0.7,
                type:"tween"
            }}
            whileInView={{
                scale:1
            }}
            className=''>
            <Image alt="gallary" className='h-full border w-full object-cover ' src={imgthree}/>

            </motion.div>
            <motion.div
            initial={{scale:0.5}}
            transition={{
                duration:0.7,
                type:"tween"
            }}
            whileInView={{
                scale:1
            }}
            className='grid h-full gap-2 grid-rows-2'>
<Image className=' w-full h-full object-cover border' alt="gallary" src={imgfour}/>

<div className='grid gap-2 grid-cols-[40%,1fr]'>
<Image alt="gallary"  className=" w-full border h-full object-cover" src={imgfive}/>
<Image alt="gallary" className='w-full border h-full object-cover' src={imgsex}/>

</div>
            </motion.div>
        </div>
        
    </div>
  </div>
  </>
}

export default Gallary



import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return <>
    <div className='py-[50px] '>
      <div className='md:w-[80%] w-[95%]  mx-auto'>
   <div className='bg-white p-4'>
   <h1 className='mb-[30px] text-[22px] font-bold capitalize'>title of article title of article </h1>
   <div className="grid  md:grid-cols-[65%,auto]  grid-cols-1  gap-4 ">
     
            <div className=''>
            <Image alt="gallary" className='h-full  w-full object-cover ' src={require("../Images/13.jpg")}/>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 h-full  gap-2">
        <Image alt="gallary" src={require("../Images/7.jpg")} className='  w-full h-full  object-cover'/>
        <Image alt="gallary" src={require("../Images/7.jpg")} className='  w-full h-full  object-cover'/>
            </div>
            
        </div>
        <p className='my-[40px] capitalize leading-[1.8]'>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores necessitatibus minima minus, maxime voluptate expedita 
          fugit veritatis quos in accusantium amet quidem illum totam repellat, consequuntur, voluptatem 
          eveniet beatae ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, quisquam 
          est porro tempore odio dolorem nulla? Molestiae doloremque aperiam odit quis libero eos quidem,
           aspernatur quia, perspiciatis, provident optio sed. Lorem ipsum dolor sit amet consectetur, 
           adipisicing elit. Odio, accusamus vitae. Provident rem architecto blanditiis neque labore
            quibusdam nulla dignissimos aliquam mollitia vel, laudantium porro ratione esse officiis numquam
             dolorem.</p>
   </div>
   <div className='bg-white mt-5 p-4'>
    <h1 className='capitalize font-bold text-[22px]'>recomendation articles </h1>
<div className='w-full md:w-[70%]'>
<div className='flex items-start mt-[30px]  border-b-2 pb-4 rounded-none  gap-3'>
<Image alt="gallary" className='h-[80px] w-[80px] object-cover ' src={require("../Images/13.jpg")}/> 
<p className='capitalize'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deleniti doloribus cum.</p>
</div>

<div className='flex items-start mt-[30px] w-fit border-b-2 pb-4 rounded-none  gap-3'>
<Image alt="gallary" className='h-[80px] w-[80px] object-cover ' src={require("../Images/13.jpg")}/> 
<p className='capitalize'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deleniti doloribus cum.</p>
</div>


<div className='flex items-start mt-[30px] w-fit  rounded-none  gap-3'>
<Image alt="gallary" className='h-[80px] w-[80px] object-cover ' src={require("../Images/13.jpg")}/> 
<p className='capitalize'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deleniti doloribus cum.</p>
</div>
</div>
   </div>
      </div>
    </div>
  </>
}

export default Blog
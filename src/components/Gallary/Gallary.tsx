import Image from 'next/image'
import React from 'react'

const Gallary = () => {
  return <>
  <div>
    <div className='w-[95%] mx-auto'>
        <h1 className='capitalize text-center my-4 text-main font-bold text-[28px]'>gallary</h1>
        <div className="grid  md:grid-cols-3  grid-cols-1  gap-2 ">
        <div className="grid grid-rows-1 md:grid-rows-2  gap-2">
        <Image alt="gallary" src={require("../Images/13.jpg")} className='w-full h-full border object-cover"'/>
                <Image alt="gallary" src={require("../Images/7.jpg")} className=' border w-full h-full object-cover"  '/>
            </div>
            <div className=''>
            <Image alt="gallary" className='h-full border w-full object-cover ' src={require("../Images/doc3.jpg")}/>

            </div>
            <div className='grid h-full gap-2 grid-rows-2'>
<Image className=' w-full h-full object-cover border' alt="gallary" src={require("../Images/doc4.jpg")}/>

<div className='grid gap-2 grid-cols-[40%,1fr]'>
<Image alt="gallary"  className=" w-full border h-full object-cover" src={require("../Images/doc5.jpg")}/>
<Image alt="gallary" className='w-full border h-full object-cover' src={require("../Images/doctor-detail.jpg")}/>

</div>
            </div>
        </div>
        
    </div>
  </div>
  </>
}

export default Gallary



import React from 'react'
import Button from './Button'
import Image from 'next/image'

function GetApp() {
  return (
    <section className='w-full flexCenter flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='w-full flex flex-1 flex-col items-start z-20 gap-12'>
            <h2 className='bold-40 lg:bold-64 xl:max'>Get for free now!</h2>
            <p className='regular-16 text-gray-10'>Available on IOS and Android</p>
          <div className='flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row'>
            <Button
              type="button"
              title="Download App"
              icon="/apple.svg"
              variant="btn_white"
              
            />
            <Button
              type="button"
              title="Download App"
              icon="/android.svg"
              variant="btn_dark_green"
              
            />           
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <Image src="/phones.png" alt="phone" width={550} height={870}/>

        </div>
      </div>
    </section>
  )
}

export default GetApp
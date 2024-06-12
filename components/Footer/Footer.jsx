import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
    <div className='p-3 bg-[#FBD029]'></div>
    <div className='bg-[#1F1D14] pt-[72px] pb-[22px] '>
       <div className='flex items-start  px-5 justify-between mb-[44px]'>
        <Image src={'/Logo.svg'} alt='Footer site logo' width={189} height={59}/>
          <div className='flex items-center gap-[89px]'>
        <div>
          <strong className='text-white font-bold text-[18px] leading-[21.09px] block mb-[19px]'>Контакты</strong>
          <ul className='flex flex-col gap-[25px]'>
            <li>
              <a className='flex items-center gap-[5px] pl-[3px]' href="tel:+998905658585">
               <Image src={'/phone.svg'} alt='Phone icon' width={24} height={24}/>
                <p className='text-[16px] leading-[19.2px] text-white'>+998 (90) <span className='font-medium text-[24px] text-white leading-[28.8px]'>565-85-85</span></p>
              </a>
            </li>
            <li>
            <a className='flex items-center gap-[13px]' href="mailto:support@figma.com">
               <Image src={'/email.svg'} alt='Email logo' width={24} height={24}/>
                <p className='text-[16px] leading-[19.2px] text-white'>support@figma.com</p>
              </a>
            </li>
          </ul>
          </div>
          <div className='flex items-center gap-[13px] w-[281px]'>
            <Image src={'/lokatsiya.svg'} alt='Location icon' width={24} height={24}/>
            <p className='text-[16px] leading-[19.2px] text-[#FFFFFF]'>Tashkent Sh. Chilonzor 9 kvartal 12 uy</p>
          </div>
        </div>
        <div>
          <strong className='font-bold text-[18px] leading-[21px] text-white'>Подписатся</strong>
          <form  className='w-[235px] flex flex-col gap-[16px] mt-[16px]'>
            <input  className='w-full rounded-[5px] border-[1px] border-[#9A9EA5] bg-[#FFFFFF] py-[10px] px-5' type="text" placeholder='support@figma.com' />
            <button className='bg-[#FBD029] w-full text-center text-[#1F1D14] text-[16px] leading-[19.2px] py-[10px] rounded-[5px]'>Отправить</button>
          </form>
          <div className='flex items-center gap-[20px] mt-[49px]'>
            <Image src={'/instagram.svg'} alt='Icons social' width={32} height={32}/>
            <Image src={'/facebook.svg'} alt='Icons social' width={32} height={32}/>
            <Image src={'/telegram.svg'} alt='Icons social' width={32} height={32}/>
          </div>
        </div>
       </div>
       <span className='block w-full h-[1px] bg-[#F2F2F2]'></span>
       <div className='flex items-center justify-between pt-[13px] px-5'>
           <p className='text-[12px] text-white font-light leading-[14px]'>© 2022 All Rights Reserved</p>
           <ul className='flex items-center space-x-[40px]'>
           <li className='text-[#7B7E86] text-[14px] leading-[16.1px]'>Privacy Policy</li>
           <li className='text-[#7B7E86] text-[14px] leading-[16.1px]'>Terms of Use</li>
           <li className='text-[#7B7E86] text-[14px] leading-[16.1px]'>Sales and Refunds</li>
           <li className='text-[#7B7E86] text-[14px] leading-[16.1px]'>Legal</li>
            <li className='text-[#7B7E86] text-[14px] leading-[16.1px]'>Site Map</li>
           </ul>
       </div>
    </div>
    </>
  )
}

export default Footer
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <>
        <div className='py-[10px] px-5 bg-[#1F1D14] flex items-center justify-between'>
       <div className='flex items-center'>
        <a href="/">
            <Image src={"/Logo.svg"} alt='Site logo' width={189} height={59} />
        </a>
        <nav>
            <ul className='flex items-center space-x-[30px]'>
                <li>
                    <a className='text-white text-[16px] leading-[19.2px] font-normal' href="#">Продукты</a>
                </li>
                <li>
                    <a className='text-white text-[16px] leading-[19.2px] font-normal' href="#">Контакты</a>
                </li>
                <li>
                    <a className='text-white text-[16px] leading-[19.2px] font-normal' href="#">Оплата и Доставка</a>
                </li>
                <li>
                    <a className='text-white text-[16px] leading-[19.2px] font-normal' href="#">Новости</a>
                </li>
                <li>
                    <a className='text-white text-[16px] leading-[19.2px] font-normal' href="#">О нас</a>
                </li>
            </ul>
        </nav>
       </div>
       <div className='flex items-center space-x-[30px]'>
         <a className='flex items-center gap-[5px]' href="tel:+998905658585">
            <Image src={"/phone.svg"} alt='Phone icon' width={16} height={16} priority={"true"}/>
            <span className='text-white text-[16px] leading-[19.2px] font-normal'>+998 (90) 565-85-85</span>
         </a>
         <a className='flex items-center gap-[5px]' href="tel:+998905658585">
            <Image src={"/email.svg"} alt='Phone icon' width={16} height={16} priority={"true"}/>
            <span className='text-white text-[16px] leading-[19.2px] font-normal'>info@gmail.com</span>
         </a>
       </div>
        </div>
        <div className='py-[16px] bg-white px-5 flex items-center justify-between'>
            <div className='flex items-center space-x-[10px]'>
            <button className='bg-[#1F1D14] w-[184px] flex items-center gap-[10px] rounded-[5px] justify-center py-[15px]'>
                <Image src={"/katalog.svg"} alt='Katalog icon' width={20} height={20} priority={"true"}/>
                <span className='text-white text-[20px] leading-[24px] font-normal'>Каталог </span>
            </button>

            <label className='flex w-[502px] items-center justify-between bg-[#F2F2F2] px-[20px] py-[17px] rounded-[5px]'>
                <input className='w-[85%] bg-transparent outline-none' type="text" placeholder='Поиск' />
                <Image src={"/search.svg"} alt='Katalog icon' width={16} height={16} priority={"true"}/>
            </label>
            
            </div>
            <div className='flex items-center gap-[20px]'>
                <div className='flex items-center gap-[13px]'>
                    <Image src={"/person.svg"} alt='Katalog icon' width={45} height={45} priority={"true"}/>
                    <Image src={"/like.svg"} alt='Katalog icon' width={50} height={50} priority={"true"}/>
                </div>
                <button className='w-[165px] flex items-center justify-center gap-[5px] bg-[#F2F2F2] py-[15px] rounded-[5px]'>
                  <Image src={"/basket.svg"} alt='Katalog icon' width={20} height={20} priority={"true"}/>
                    <span className='text-[#1F1D14] text-[20px] leading-[24px]'>Корзина</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header
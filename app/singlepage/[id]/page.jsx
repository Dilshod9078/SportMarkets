"use client";

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Page({ params }) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setState(res.data);
        setLoading(false); 
      })
      .catch(err => {
        console.log(err);
        setLoading(false); 
      });
  }, []);

  function getOne(arr) {
    const oneData = arr.find(item => item.id === parseInt(params.id));
    return oneData;
  }

  const singleData = getOne(state);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!singleData) {
    return <div>Item not found</div>;
  }

  return (
 <div className='pb-[75px]'>
  <div className='py-[25px] px-5 flex items-center justify-between'>
    <div className="flex items-center  gap-[11px]">
       <div className="flex items-center gap-[5px]">
        <Image src={'/home.svg'} alt="Home icon" width={16} height={16} />
        <Link href={'/'} className="text-[16px] opacity-60 text-black leading-[19.2px]">Главная</Link>
       </div>
       <div className="flex items-center gap-[5px]">
        <Image src={'/arrow.svg'} alt="Home icon" width={16} height={16} />
        <span className="text-[16px] text-black leading-[19.2px]">Продукты</span>
        <Image src={'/arrow.svg'} alt="Home icon" width={16} height={16} />
         <span className='text-[#1F1D14] text-[16px] leading-[19.2px] font-semibold'>{singleData.title}</span>
       </div>
    </div>
    <button className="flex items-center justify-between rounded-[5px] bg-white w-[216px] py-[10.5px] pl-[17px] pr-[12px]">
     <span className="text-[16px] leading-[19.2px]">Сортировать:</span>
     <Image src={'/down.svg'} alt="Down-icon" width={16} height={16}/>
    </button>
  </div>
     <div className='px-5 flex items-center justify-between mb-[57px]'>
      <div className='bg-[white] py-[50px] w-[47%] flex items-center justify-center rounded-[10px]'>
      <img className='h-[317px] object-cover' src={singleData.image} alt={singleData.title} width={408} height={317} />
      </div>
      <div className='bg-white rounded-[10px] w-[47%] pt-[65px] pb-[25px] pl-[52px] pr-[80px]'>
      <h2 className='text-[#1F1D14] text-[32px] leading-[34px] mb-[16px] font-medium'>{singleData.title}</h2>
      <p className='text-[16px] leading-[19.2px] mb-[20px]'>{singleData.description}</p>
      <p className='text-[#1F1D14] font-medium text-[24px] mb-[34px] leading-[28.8px] flex items-end'>{singleData.price} 000 <span className='font-normal text-[20px] leading-[24px]'>uzs</span> <strong className='font-normal text-[20px] leading-[24px]'> | 1 шт.</strong></p>
      <div className='flex items-center gap-[21px]'>
      <button  className="flex items-center justify-center gap-[6px] rounded-[5px] py-[19px] w-[152px] bg-[#FBD029]">
         <Image src={'/basket.svg'} alt="Basket icon" width={20} height={20}/>
          <span className="text-[#1F1D14] text-[20px] leading-[24px]">Корзина</span>
      </button>
      <button  className="flex items-center justify-center gap-[6px] border-[2px] border-[#FBD029] rounded-[5px] py-[19px] w-[145px]">
         <Image src={'/slider.svg'} alt="Basket icon" width={16} height={16}/>
          <span className="text-[#1F1D14] text-[20px] leading-[24px]">Сравнить</span>
      </button>
      </div>
      </div>
    </div>

    <div className='px-5'>
    <h2 className="text-[#1F1D14] text-[32px] mb-[30px] leading-[38.8px] font-medium">Похожие продукты</h2>
        <ul className="flex items-center justify-between">
          <li className="w-[292px] bg-white rounded-[5px] pt-[25px]">
          <div className="relative pr-[20px] pl-[30px]">
            <Image className="absolute top-[-24px] right-0" src={'/heart.svg'} alt="Like icon" width={24} height={24}/>
             <Image src={'/arm.svg'} alt="Arm image" width={242} height={294}/>
            <h3 className="text-[20px] leading-[24px] mb-[24px]">Бутса Nike Mercurial Superfly 8 FG</h3>
            <p className="block mb-[20px] font-bold text-[20px] leading-[23.44px] text-[#1F1D14]">250 000  <span className="text-[20px] leading-[24px] font-semibold">uzs</span></p>
      </div>
      <button className="flex items-center justify-center gap-[6px] rounded-br-[5px] rounded-bl-[5px] py-[19px] w-full bg-[#FBD029]">
         <Image src={'/basket.svg'} alt="Basket icon" width={20} height={20}/>
           <span className="text-[#1F1D14] text-[20px] leading-[24px]">Корзина</span>
      </button>
          </li>
          <li className="w-[292px] bg-white rounded-[5px] pt-[25px]">
          <div className="relative pr-[20px] pl-[30px]">
            <Image className="absolute top-[-24px] right-0" src={'/heart.svg'} alt="Like icon" width={24} height={24}/>
             <Image src={'/gamtel.svg'} alt="Arm image" width={242} height={294}/>
            <h3 className="text-[20px] leading-[24px] mb-[24px]">Бутса Nike Mercurial Superfly 8 FG</h3>
            <p className="block mb-[20px] font-bold text-[20px] leading-[23.44px] text-[#1F1D14]">250 000  <span className="text-[20px] leading-[24px] font-semibold">uzs</span></p>
      </div>
      <button className="flex items-center justify-center gap-[6px] rounded-br-[5px] rounded-bl-[5px] py-[19px] w-full bg-[#FBD029]">
         <Image src={'/basket.svg'} alt="Basket icon" width={20} height={20}/>
           <span className="text-[#1F1D14] text-[20px] leading-[24px]">Корзина</span>
      </button>
          </li>
          <li className="w-[292px] bg-white rounded-[5px] pt-[25px]">
          <div className="relative pr-[20px] pl-[30px]">
            <Image className="absolute top-[-24px] right-0" src={'/heart.svg'} alt="Like icon" width={24} height={24}/>
             <Image src={'/gantel.svg'} alt="Arm image" width={242} height={294}/>
            <h3 className="text-[20px] leading-[24px] mb-[24px]">Бутса Nike Mercurial Superfly 8 FG</h3>
            <p className="block mb-[20px] font-bold text-[20px] leading-[23.44px] text-[#1F1D14]">250 000  <span className="text-[20px] leading-[24px] font-semibold">uzs</span></p>
      </div>
      <button className="flex items-center justify-center gap-[6px] rounded-br-[5px] rounded-bl-[5px] py-[19px] w-full bg-[#FBD029]">
         <Image src={'/basket.svg'} alt="Basket icon" width={20} height={20}/>
           <span className="text-[#1F1D14] text-[20px] leading-[24px]">Корзина</span>
      </button>
          </li>
          <li className="w-[292px] bg-white rounded-[5px] pt-[25px]">
          <div className="relative pr-[20px] pl-[30px]">
            <Image className="absolute top-[-24px] right-0" src={'/heart.svg'} alt="Like icon" width={24} height={24}/>
             <Image src={'/arm.svg'} alt="Arm image" width={242} height={294}/>
            <h3 className="text-[20px] leading-[24px] mb-[24px]">Бутса Nike Mercurial Superfly 8 FG</h3>
            <p className="block mb-[20px] font-bold text-[20px] leading-[23.44px] text-[#1F1D14]">250 000  <span className="text-[20px] leading-[24px] font-semibold">uzs</span></p>
      </div>
      <button className="flex items-center justify-center gap-[6px] rounded-br-[5px] rounded-bl-[5px] py-[19px] w-full bg-[#FBD029]">
         <Image src={'/basket.svg'} alt="Basket icon" width={20} height={20}/>
           <span className="text-[#1F1D14] text-[20px] leading-[24px]">Корзина</span>
      </button>
          </li>
        </ul>
    </div>
 </div>
  );
}

export default Page;

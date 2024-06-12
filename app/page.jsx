"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [clothes, setClothes] = useState([])

  useEffect(() => {
   axios.get('https://fakestoreapi.com/products').then(res => {
    setClothes(res.data);
   })
   .catch(err => {
    console.log(err);
   })
  },[])



  return (
   <div className="px-5 pb-[208px]">

    <div className="py-[20px] flex items-center gap-[11px]">
       <div className="flex items-center gap-[5px]">
        <Image src={'/home.svg'} alt="Home icon" width={16} height={16} />
        <Link href={'/'} className="text-[16px] opacity-60 text-black leading-[19.2px]">Главная</Link>
       </div>
       <div className="flex items-center gap-[5px]">
        <Image src={'/arrow.svg'} alt="Home icon" width={16} height={16} />
        <span className="text-[16px] text-black leading-[19.2px]">Продукты</span>
       </div>
    </div>

    <div className="flex items-start space-x-[24px]">
      <div className="w-[292px] bg-white pt-[19px] rounded-[8px]">
        <p className="text-[16px] leading-[19.2px] px-[18px] mb-[20px]">Филтрь</p>
        <div className="px-[18px]">
        <span className="block mb-[10px] text-[12px] leading-[14.4px]">Цена</span>
        <div className="rounded-[5px] bg-[#F2F2F2] pt-[15px] pr-[20px] pb-[12px] pl-[25px] mb-[16px]">
          <Image src={'/sena.svg'} alt="Sena" width={211} height={55} />
        </div>
        <span className="block mb-[10px] text-[12px] leading-[14.4px]">Артикул:</span>
        <div className="rounded-[5px] bg-[#F2F2F2] py-[11px]  px-[18px] mb-[16px]">
          <span className="text-[16px] text-[#000] opacity-60">аф566</span>
        </div>
        <span className="block mb-[10px] text-[12px] leading-[14.4px]">Выберите категорию:</span>
        <div className="rounded-[5px] flex items-center justify-between bg-[#F2F2F2] py-[11px]  px-[18px] mb-[16px]">
           <span className="text-[16px] text-[#000] opacity-60">Все</span>
            <Image src={'/down.svg'} alt="Sena" width={16} height={16} />
        </div>
        <span className="block mb-[10px] text-[12px] leading-[14.4px]">Новинка:</span>
        <div className="rounded-[5px] flex items-center justify-between bg-[#F2F2F2] py-[11px]  px-[18px] mb-[16px]">
           <span className="text-[16px] text-[#000] opacity-60">Все</span>
            <Image src={'/down.svg'} alt="Sena" width={16} height={16} />
        </div>
        <span className="block mb-[10px] text-[12px] leading-[14.4px]">Акция:</span>
        <div className="rounded-[5px] mb-[54px] flex items-center justify-between bg-[#F2F2F2] py-[11px]  px-[18px]">
           <span className="text-[16px] text-[#000] opacity-60">Все</span>
            <Image src={'/down.svg'} alt="Sena" width={16} height={16} />
        </div>
        </div>
      <div className="bg-[#E4E4E4] pt-[15px] pb-[21px] text-center rounded-br-[8px] rounded-bl-[8px]">
        <p className="text-[15px] leading-[18px]">Показать результат</p>
      </div>
      </div>

      <div className="w-[78%] mb-[111px]">
        <div className="flex items-center justify-between mb-[10px]">
          <div className="flex items-center gap-[25px]">
            <div className="flex items-center justify-center gap-[5px] rounded-[5px] bg-white w-[147px] py-[7px] px-[15px]">
              <span className="text-[16px] leading-[19.2px]">Сортировать</span>
              <Image src={'/down.svg'} alt="Down-icon" width={16} height={16}/>
            </div>
            <div className="flex items-center justify-center gap-[5px] rounded-[5px] bg-white w-[164px] py-[7px] px-[15px]">
              <span className="text-[16px] leading-[19.2px]">Все продукты</span>
              <Image src={'/down.svg'} alt="Down-icon" width={16} height={16}/>
            </div>
            </div>

             <div className="flex items-center gap-[8px]">
            <div className="flex items-center justify-center gap-[5px] rounded-[5px] bg-white w-[93px] py-[7px] px-[15px]">
              <span className="text-[16px] leading-[19.2px]">Кард</span>
              <Image src={'/kard.svg'} alt="Down-icon" width={16} height={16}/>
            </div>

            <div className="flex items-center justify-center gap-[12px] rounded-[5px] bg-[#FFFFFF4D] w-[93px] py-[7px] px-[15px]">
              <span className="text-[16px] leading-[19.2px] opacity-40">Лист</span>
              <Image src={'/list.svg'} alt="Down-icon" width={16} height={16}/>
            </div>
            </div>

        </div>
         
         <ul className="flex items-center justify-between flex-wrap gap-[40px] mb-[50px]">
          {
            clothes.length > 0 && clothes.map(item => (
              <li key={item.id} className="w-[292px] bg-white rounded-[5px] pt-[25px]">
                <div className="relative pr-[20px] pl-[30px]">
                  <Image className="absolute top-[-24px] right-0" src={'/heart.svg'} alt="Like icon" width={24} height={24}/>
                  <Image className="item__image mb-[20px] h-[194px] object-cover" src={item.image} alt="Clothes image" width={242} height={194}/>
                    <h3 className="item__title text-[20px] leading-[24px] mb-[24px]">{item.title}</h3>
                    <p className="block mb-[20px] font-bold text-[20px] leading-[23.44px] text-[#1F1D14]">{item.price} 000 <span className="text-[20px] leading-[24px] font-semibold">uzs</span></p>
                    <p className="mb-[20px]"><strong>Category:</strong> {item.category}</p>
                    <p className="item__text mb-[27px]"><strong>Description:</strong> {item.description}</p>
                </div>
                    <Link href={`/singlepage/${item.id}`}  className="flex items-center justify-center gap-[6px] rounded-br-[5px] rounded-bl-[5px] py-[19px] w-full bg-[#FBD029]">
                      <Image src={'/basket.svg'} alt="Basket icon" width={20} height={20}/>
                      <span className="text-[#1F1D14] text-[20px] leading-[24px]">Корзина</span>
                    </Link>
              </li>
            ))
          }
         </ul>
            <button className="w-full rounded-[5px] bg-[#fff] py-[15px] text-center text-[20px] leading-[24px]">Показать ещё</button>
      </div>
    </div>
        <h2 className="text-[#1F1D14] text-[32px] mb-[60px] leading-[38.8px] font-medium">Реконмендуемые продукты</h2>
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
  );
}

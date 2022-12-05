import React from 'react';
import "./Header.css";

export default function Header() {
  return (
    <div className='header pt-96 pb-60'>
      <div className="container">
        <h1 className='text-[#F2F2F2] text-9xl leading-[9.4rem] text-center '>Ремонт вашей мечты</h1>
        <div className='mt-52 text-center text-white'>
          <a href="#" className='header__btn w-[348px] py-[24px] mr-10 inline-block text-[2.4rem] leading-[2.8rem] bg-[#111111E5] hover:bg-[]'>Проекты</a>
          <a href="#" className='header__btn w-[348px] py-[24px] ml-10 inline-block text-[2.4rem] leading-[2.8rem] bg-[#111111E5]'>Расчитать стоимость</a>
        </div>
      </div>
    </div>
  )
}

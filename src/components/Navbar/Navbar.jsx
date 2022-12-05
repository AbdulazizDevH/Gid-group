import React from "react";
import Logo from '../../assets/header/Logo.png';
import phone from '../../assets/header/phone.png';

export default function Navbar() {
  return (
    <div className="fixed left-0 right-0 navbar py-[14px] bg-[#000000CC]">
      <div className="container flex justify-between items-center">
        <a href="/">
          <img src={phone} />
        </a>
        <a href="/">
          <img src={Logo} />
        </a>
        <a href="/">
          <img src={phone} />
        </a>
      </div>
    </div>
  );
}

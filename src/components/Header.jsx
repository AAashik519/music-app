import React from 'react'
import Logo from '../img/MuzicLogo.png'
import CenterMenu from './CenterMenu'
const Header = () => {
    const buttonStyle ='border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px] '
  return (
    <div className='Header flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]  bg-[#081730] '> 

        {/* logo */}
        <img src={Logo} alt="logo" className='logo w-[42px] h-[42px]' />

        {/* Sider Menu */}
        <CenterMenu />
        {/* button */}
        <div className="buttons flex  ">
            <button className={`mr-[20px] hover:bg-[#232A4E] `+buttonStyle}>Sign In</button>
            <button className={buttonStyle +`bg-[#232A4E]`} >Sign Up</button>
        </div>

    </div>
  )
}

export default Header;
import React from 'react'
import Path from '../img/Path 318.png'
import Group  from  '../img/Group.png'
import music_icon  from  '../img/music_icon.png'
import Group_4  from  '../img/Group 4.png'
// import Group  from  '../img/Group.png'
import Feature from './Feature'
const Experience = () => {
  return (
    <div className='experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]'> 
     {/* titld icon */}
        <img src={Path} alt="" 
        className='w-[5rem]'
        />

        {/* Heading */}
        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>An Amaizing App Can Change Your Daily Life</span>
            <span>Music Experience</span>
        </div>

        {/* Feature */}
        <div className="feature flex items-center justify-around mt-[6rem] w-[100%] ">
           
            <Feature icon={Group} title="For Daily Music" />
            <Feature icon={music_icon} title="For Artists" />
            <Feature icon={Group_4} title="For Daily Music" />

        </div>

    </div>
  )
}

export default Experience
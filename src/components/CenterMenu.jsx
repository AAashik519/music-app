import React from 'react'

const CenterMenu = () => {
    const liStyle ="mr-[3rem] hover:cursor-pointer"
  return (
    <div> 
        <div className="mune flex">
            <ul className='flex justify-between w-[100%] '>
                <li className={liStyle}>Home</li>
                <li className={liStyle}>About</li>
                <li className={liStyle}>Preformer</li>
                <li className={liStyle}>Event Shedule</li>
                
            </ul> 
        </div>
    </div>
  )
}

export default CenterMenu
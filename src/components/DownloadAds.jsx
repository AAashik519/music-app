import React from 'react'
import Google_PLay from '../img/Google Play.png'
import  App_Store from '../img/App Store.png'
const DownloadAds = () => {
    const downloadImgStyle='border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className='download'> 
    <div className="download_images flex ">
        <img src={Google_PLay}  alt="" className={downloadImgStyle + ` mr-[2rem]`}  />
        <img src={App_Store}  alt=""   className={downloadImgStyle} />
    </div>
    </div>
  )
}

export default DownloadAds
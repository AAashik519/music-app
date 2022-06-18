import React from 'react'
import DownloadAds from './DownloadAds'
import backgraphics from '../img/backgraphics.png'
import Rectangle  from '../img/Rectangle 7.png'
import p1 from '../img/p 1.png'
import p2 from '../img/p 2.png'
import p3 from '../img/p 3.png'
import p4 from '../img/p 4.png'

const Hero = () => {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem]  w-[100%] h-[35rem] relative">
      {/* left Side  */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem] ">
        <span> Experienc The</span>
        <span>Best Quality Music</span>
        <span className="text-[15px] text-[#525D6E]">
          Donec laoreet nec velit vitae aliquam .Ut quis tincidunt purus.
          <br />
          Suspendisse in Leo non risus tincident lobortis.
        </span>
        {/* download ads */}
        <div>
          <span className="text-[13px]">Download now on IOS and Android</span>
          <DownloadAds />
        </div>
      </div>
      {/* right Side  */}
      <div className="images relative w-[50%]">
        <img
          src={backgraphics}
          alt="backgraphics"
          className="absolute top-[-8rem] left-[19rem]"
        />
        <img
          src={p1}
          alt="backgraphics"
          className="absolute top-[-15rem] h-[34rem] left-[13rem]"
        />
        <img
          src={p2}
          alt="backgraphics"
          className="absolute left-[235px] top-[94px] w-[175px]"
        />
        <img
          src={p3}
          alt="backgraphics"
          className="absolute w-[5rem] left-[13rem] top-[12rem]"
        />
        <img
          src={p4}
          alt="backgraphics"
          className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
        />


      </div>
    </div>
  );
}

export default Hero
// import React from 'react'

const Background = ({ element }: any) => {
  return (
    <>
      <div className="flex  h-[100vh]">
        <div className="absolute flex items-center justify-center w-full h-full bg-gray-900 bg-dot-white/15"></div>
        {/* <div className="absolute pointer-events-none inset-0  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        {element}
      </div>
    </>
  );
};

export default Background;

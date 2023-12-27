import React from 'react'
import { Banner1, Banner2, Banner3, Banner4, Banner5} from "../images";
const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
const Header = ({title,image,type}) => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img src={image ?? images[Math.floor(Math.random()*images.length)]} alt="Recipes"
        className="w-full h-full object-cover" />
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8
         flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 ">
          <h1 className="text-white text-center md:text-5xl text-4xl font-bold">
            {title}
          </h1>
          {
            type && (
              <p className="text-sm bg-green-500 bg-[#00000090] mt-4 px-6 py-4
              rounded-full text-center">
                Welcome to FlavorVerse your passport to the culinary world!!
                <br className="hidden md:block" /> 
                Discover a treasure chest of mouth watering cuisines
                from around the world.
              </p>
            )
          }
         </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react';
import { facebook_icon, instagram_icon, Linkedin_icon, twitter_icon } from '../../assets/Logos';

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl flex justify-between align-center mx-auto px-2">
        {/* Grid for Sections */}
        <div className=''>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4" style={{ color: "#FFDAC9"}}>SECTION {index + 1}</h3>
              <ul className="space-y-2" style={{ color: "#767676"}} >
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8  text-center" style={{ color: "#767676"}}>
          <p>
            2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor.
          </p>
        </div>


        </div>

        {/* Logo Section */}

        <div className='flex flex-col justify-between mt-10 ' style={{ height: "10rem" }}>

        <div className="flex flex-col align-start justify-center  text-start -mt-10 ">
          <h2 className="text-2xl font-bold tracking-wide" >THIS IS THE</h2>
          <h1 className="text-6xl font-bold ml-0  tracking-wide">LOGO</h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-16 space-x-6">
          <img src={facebook_icon} alt="facebook_logo" className="w-6 h-6 hover:text-gray-400 cursor-pointer" />

          <img src={twitter_icon} alt="facebook_logo" className="w-6 h-6 hover:text-gray-400 cursor-pointer" />

          <img src={instagram_icon} alt="facebook_logo" className="w-6 h-6 hover:text-gray-400 cursor-pointer" />

          <img src={Linkedin_icon} alt="facebook_logo" className="w-6 h-6 hover:text-gray-400 cursor-pointer" />

          <Dribbble className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
        </div>

        </div>


      </div>
    </footer>
  );
}

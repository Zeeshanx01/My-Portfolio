import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaStackOverflow, FaEnvelope, FaQuora, FaReddit, FaFacebook, FaLink } from 'react-icons/fa';
import { SiFiverr, SiUpwork, SiFreelancer, SiX, SiThreads } from 'react-icons/si';
import { navLinks } from '../constants/navLinks';
import Image from 'next/image';
const Footer = () => {
  const [showAllIcons, setShowAllIcons] = useState(false);
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Zeeshanx01' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/zeeshan-munir-b073a51b9' },
    { icon: <FaEnvelope />, url: 'mailto:zeeshan.x01000@gmail.com' },
    { icon: <FaStackOverflow />, url: 'https://stackoverflow.com/users/20757870/zeeshan-munir' },
    { icon: <SiFiverr />, url: 'https://www.fiverr.com/sellers/zeeshanx01/edit?utm_medium=shared&utm_source=whatsapp&utm_campaign=seller_profile_self_view&utm_term=Egy9YLq' },
    { icon: <FaLink />, url: 'https://linktr.ee/Zeeshanx01' },
    
    { icon: <FaQuora />, url: 'https://www.quora.com/profile/Zeeshan-Munir-49' },
    { icon: <FaReddit />, url: 'https://www.reddit.com/user/Direct-Ad-7102/' },
    { icon: <SiUpwork />, url: 'https://www.upwork.com/freelancers/~010a5330a9eb0b4708' },
    { icon: <SiFreelancer />, url: 'https://www.freelancer.com/u/Zeeshanx01' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/zeeshan.muneer.925' },
    { icon: <SiX />, url: 'https://x.com/ZeeshanMunir165' },
    { icon: <FaInstagram />, url: 'https://instagram.com/zeeshan_x01' },
    { icon: <SiThreads />, url: 'https://threads.net/@zeeshan-x01' },

    // { icon: <FaYoutube />, url: 'https://www.youtube.com/@zeeshanmunir' },
    // { icon: <FaTelegram />, url: 'https://t.me/zeeshanmunir' },
    // { icon: <FaWhatsapp />, url: 'https://wa.me/923456789012' },
    // { icon: <FaPinterest />, url: 'https://www.pinterest.com/zeeshanmunir' },
    // { icon: <FaTikTok />, url: 'https://www.tiktok.com/@zeeshanmunir' },
    // { icon: <FaSnapchat />, url: 'https://www.snapchat.com/add/zeeshanmunir' },
    // { icon: <FaVimeo />, url: 'https://www.vimeo.com/zeeshanmunir' },
    // { icon: <FaSoundcloud />, url: 'https://soundcloud.com/zeeshanmunir' },
    // { icon: <FaSpotify />, url: 'https://open.spotify.com/user/zeeshanmunir' },
    // { icon: <FaApple />, url: 'https://music.apple.com/user/zeeshanmunir' },
    // { icon: <FaAmazon />, url: 'https://www.amazon.com/gp/product/B08N5L5R6Y' },
    // { icon: <FaGoogle />, url: 'https://www.google.com/search?q=zeeshanmunir' },

  ];
  const visibleIcons = showAllIcons ? socialLinks : socialLinks.slice(0, 6);

  return (
    <footer className="bg-zinc-900/80 backdrop-blur-sm text-white pt-20 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left md:pl-8">




          <div className="duration-700  flex justify-center md:justify-start items-start space-x-6 mb-0 md:mb-0 md:col-span-1 ">
            <a
              href="/"
              className="duration-700 flex items-center space-x-4"
              target='_blank'
              rel="noopener noreferrer"
            >
               <div className="group relative">
                 <h2 className="text-3xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-400 transition-all duration-500">
                     <p className='font-bold'>Zeeshan Munir</p>
                     <p className="text-sm  text-gray-400">Creative MERN Stack Developer</p>
                 </h2>
                 <div className=" absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></div>
               </div>
               <Image
                 className='w-20'
                 src="/portfolio.gif"
                 alt=""
                 width={80}
                 height={80}
                 unoptimized
               />
            </a>
          </div>










          <div className=" md:pl-16 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-semibold mb-3 text-lg">Menu</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>




          <div className="h-48 flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-3 text-lg">Connect</h4>
            <div className="w-56">
               <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 {visibleIcons.map((link, index) => (
                   <a
                     key={index}
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors duration-300"
                   >
                     {React.cloneElement(link.icon, { size: 24 })}
                   </a>
                 ))}
               </div>
               {socialLinks.length > 6 && (
                 <button 
                   onClick={() => setShowAllIcons(!showAllIcons)}
                   className="text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-4 text-sm font-semibold"
                 >
                   {showAllIcons ? 'View Less' : 'View All'}
                 </button>
               )}
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Zeeshan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
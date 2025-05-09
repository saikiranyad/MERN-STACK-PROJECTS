// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import image from '../../assets/Hs.png'
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center md:text-left">
//         <div>
//           <div className="text-xl font-bold"> <Link to="/"><img src={image} alt="" className="h-30 ml-20"/></Link></div>
//           <p className="mt-2 ml-20 text-gray-400">Your trusted brand.</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Company</h3>
//           <ul className="mt-2 space-y-2">
//             <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Quick Links</h3>
//           <ul className="mt-2 space-y-2">
//             <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Follow Us</h3>
//           <div className="flex justify-center md:justify-start space-x-4 mt-2">
//             <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
//             <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
//             <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
//             <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
//           </div>
//         </div>
//       </div>
//       <div className="mt-6 text-center text-gray-500 text-sm px-6">
//         &copy; {new Date().getFullYear()} LOGO. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import image from '../../assets/Hs.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-12 text-center md:text-left">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="mb-2">
            <img src={image} alt="Logo" className="h-16" />
          </Link>
          <p className="text-gray-400 text-sm">Your trusted brand.</p>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm px-4">
        &copy; {new Date().getFullYear()} LOGO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

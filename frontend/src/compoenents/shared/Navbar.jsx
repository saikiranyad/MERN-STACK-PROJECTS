// // // import { useState, useEffect, useRef } from "react"
// // // import { Link, useNavigate } from "react-router-dom"
// // // import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa"

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false)
// // //   const [dropdownOpen, setDropdownOpen] = useState(false)
// // //   const [user, setUser] = useState(null)
// // //   const navigate = useNavigate()
// // //   const dropdownRef = useRef(null)

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("user")
// // //     setUser(null)
// // //     setDropdownOpen(false)
// // //     navigate("/")
// // //   }

// // //   useEffect(() => {
// // //     const userData = JSON.parse(localStorage.getItem("user"))
// // //     if (userData) {
// // //       setUser(userData)
// // //     }
// // //   }, [])

// // //   useEffect(() => {
// // //     const handleClickOutside = (e) => {
// // //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// // //         setDropdownOpen(false)
// // //       }
// // //     }
// // //     document.addEventListener("mousedown", handleClickOutside)
// // //     return () => document.removeEventListener("mousedown", handleClickOutside)
// // //   }, [])

// // //   return (
// // //     <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
// // //       <Link to="/" className="text-2xl font-semibold">Logo</Link>

// // //       <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
// // //         {isOpen ? <FaTimes /> : <FaBars />}
// // //       </button>

// // //       <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
// // //         {/* All navigation links */}
// // //         <Link to="/" className="hover:text-blue-500">Home</Link>
// // //         <Link to="/products" className="hover:text-blue-500">Products</Link>
// // //         <Link to="/cloths" className="hover:text-blue-500">Cloths</Link>
// // //         {/* <Link to="/footwear" className="hover:text-blue-500">Footwear</Link> */}
// // //         <Link to="/electronics" className="hover:text-blue-500">Electronics</Link>
// // //         <Link to="/groceries" className="hover:text-blue-500">Groceries</Link>
// // //         <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
// // //         <Link to="/customerdashboard" className="hover:text-blue-500">Customer Dashboard</Link>
// // //         <Link to="/cart" className="hover:text-blue-500"><FaShoppingCart className="inline text-xl" /></Link>
// // //         <Link to="/addproduct" className="hover:text-blue-500">Add Product</Link>
// // //         <Link to="/sellerdashboard" className="hover:text-blue-500">Seller Dashboard</Link>

// // //         {/* User profile dropdown or login/signup */}
// // //         {user ? (
// // //           <div className="relative" ref={dropdownRef}>
// // //             <button onClick={() => setDropdownOpen(!dropdownOpen)}>
// // //               <FaUserCircle className="text-2xl" />
// // //             </button>
// // //             {dropdownOpen && (
// // //               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
// // //                 <Link to="/updateprofile" className="block px-4 py-2 hover:bg-gray-100">Update Profile</Link>
// // //                 <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
// // //                   Logout
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         ) : (
// // //           <div className="flex space-x-2">
// // //             <Link to="/login">
// // //               <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
// // //             </Link>
// // //             <Link to="/signup">
// // //               <button className="bg-gray-300 px-4 py-2 rounded">Sign Up</button>
// // //             </Link>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   )
// // // }

// // // export default Navbar



// // import { useState, useEffect, useRef } from "react"
// // import { Link, useNavigate } from "react-router-dom"
// // import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa"

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [dropdownOpen, setDropdownOpen] = useState(false)
// //   const [user, setUser] = useState(null)
// //   const navigate = useNavigate()
// //   const dropdownRef = useRef(null)

// //   const handleLogout = () => {
// //     localStorage.removeItem("user")
// //     setUser(null)
// //     setDropdownOpen(false)
// //     navigate("/")
// //   }

// //   useEffect(() => {
// //     const userData = JSON.parse(localStorage.getItem("user"))
// //     if (userData) {
// //       setUser(userData)
// //     }
// //   }, [])

// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// //         setDropdownOpen(false)
// //       }
// //     }
// //     document.addEventListener("mousedown", handleClickOutside)
// //     return () => document.removeEventListener("mousedown", handleClickOutside)
// //   }, [])

// //   return (
// //     <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
// //       <Link to="/" className="text-2xl font-semibold">Logo</Link>

// //       <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
// //         {isOpen ? <FaTimes /> : <FaBars />}
// //       </button>

// //       <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
// //         {/* All navigation links */}
// //         <Link to="/" className="hover:text-blue-500">Home</Link>
// //         <Link to="/products" className="hover:text-blue-500">Products</Link>
// //         <Link to="/cloths" className="hover:text-blue-500">Cloths</Link>
// //         <Link to="/electronics" className="hover:text-blue-500">Electronics</Link>
// //         <Link to="/groceries" className="hover:text-blue-500">Groceries</Link>
// //         <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
// //         <Link to="/customerdashboard" className="hover:text-blue-500">Customer Dashboard</Link>
// //         <Link to="/cart" className="hover:text-blue-500"><FaShoppingCart className="inline text-xl" /></Link>
// //         <Link to="/addproduct" className="hover:text-blue-500">Add Product</Link>
// //         <Link to="/sellerdashboard" className="hover:text-blue-500">Seller Dashboard</Link>

// //         {/* User profile dropdown or login/signup */}
// //         {user ? (
// //           <div className="relative" ref={dropdownRef}>
// //             <button onClick={() => setDropdownOpen(!dropdownOpen)}>
// //               <FaUserCircle className="text-2xl" />
// //             </button>
// //             {dropdownOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
// //                 <Link to="/updateprofile" className="block px-4 py-2 hover:bg-gray-100">Update Profile</Link>
// //                 <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
// //                   Logout
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="flex space-x-2">
// //             <Link to="/login">
// //               <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
// //             </Link>
// //             <Link to="/signup">
// //               <button className="bg-gray-300 px-4 py-2 rounded">Sign Up</button>
// //             </Link>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   )
// // }

// // export default Navbar



// // import { useState, useEffect, useRef } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);  // For mobile menu toggle
// //   const [dropdownOpen, setDropdownOpen] = useState(false);  // For dropdown toggle
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();
// //   const dropdownRef = useRef(null);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //     setDropdownOpen(false);
// //     navigate("/");
// //   };

// //   useEffect(() => {
// //     const userData = JSON.parse(localStorage.getItem("user"));
// //     if (userData) {
// //       setUser(userData);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// //         setDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
// //       <Link to="/" className="text-2xl font-semibold">Logo</Link>

// //       {/* Hamburger icon for mobile */}
// //       <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
// //         {isOpen ? <FaTimes /> : <FaBars />}
// //       </button>

// //       {/* Navigation links */}
// //       <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
// //         {/* Desktop Navigation links */}
// //         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
// //           <Link to="/" className="hover:text-blue-500">Home</Link>
// //           <Link to="/products" className="hover:text-blue-500">Products</Link>
// //           <Link to="/cloths" className="hover:text-blue-500">Cloths</Link>
// //           <Link to="/electronics" className="hover:text-blue-500">Electronics</Link>
// //           <Link to="/groceries" className="hover:text-blue-500">Groceries</Link>
// //           <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
// //           <Link to="/customerdashboard" className="hover:text-blue-500">Customer Dashboard</Link>
// //           <Link to="/cart" className="hover:text-blue-500"><FaShoppingCart className="inline text-xl" /></Link>
// //           <Link to="/addproduct" className="hover:text-blue-500">Add Product</Link>
// //           <Link to="/sellerdashboard" className="hover:text-blue-500">Seller Dashboard</Link>
// //         </div>

// //         {/* User profile dropdown or login/signup */}
// //         {user ? (
// //           <div className="relative" ref={dropdownRef}>
// //             <button onClick={() => setDropdownOpen(!dropdownOpen)}>
// //               <FaUserCircle className="text-2xl" />
// //             </button>
// //             {dropdownOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
// //                 <Link to="/updateprofile" className="block px-4 py-2 hover:bg-gray-100">Update Profile</Link>
// //                 <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
// //                   Logout
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="flex space-x-2">
// //             <Link to="/login">
// //               <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
// //             </Link>
// //             <Link to="/signup">
// //               <button className="bg-gray-300 px-4 py-2 rounded">Sign Up</button>
// //             </Link>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// // import { useState, useEffect, useRef } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
// // import image from '../../assets/Hs.png';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);  // For mobile menu toggle
// //   const [dropdownOpen, setDropdownOpen] = useState(false);  // For dropdown toggle
// //   const [user, setUser] = useState(null);
// //   const [lastScrollY, setLastScrollY] = useState(0);  // Track last scroll position
// //   const [showNavbar, setShowNavbar] = useState(true);  // Control navbar visibility
// //   const navigate = useNavigate();
// //   const dropdownRef = useRef(null);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //     setDropdownOpen(false);
// //     navigate("/");
// //   };

// //   useEffect(() => {
// //     const userData = JSON.parse(localStorage.getItem("user"));
// //     if (userData) {
// //       setUser(userData);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > lastScrollY) {
// //         // Scroll Down
// //         setShowNavbar(false);
// //       } else {
// //         // Scroll Up
// //         setShowNavbar(true);
// //       }
// //       setLastScrollY(window.scrollY);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScrollY]);

// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// //         setDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     <nav
// //       className={`bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50 transition-transform duration-300 ${
// //         showNavbar ? "transform-none" : "-translate-y-full"
// //       }`}
// //     >
// //       <Link to="/" className="text-2xl font-semibold"> <img src={image} alt="Logo" className="h-16" /></Link>

// //       {/* Hamburger icon for mobile */}
// //       <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
// //         {isOpen ? <FaTimes /> : <FaBars />}
// //       </button>

// //       {/* Navigation links */}
// //       <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
// //         {/* Desktop Navigation links */}
// //         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
// //           <Link to="/" className="hover:text-blue-500">Home</Link>
// //           <Link to="/products" className="hover:text-blue-500">Products</Link>
// //           <Link to="/cloths" className="hover:text-blue-500">Cloths</Link>
// //           <Link to="/electronics" className="hover:text-blue-500">Electronics</Link>
// //           <Link to="/groceries" className="hover:text-blue-500">Groceries</Link>
// //           <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
// //           <Link to="/customerdashboard" className="hover:text-blue-500">Customer Dashboard</Link>
// //           <Link to="/cart" className="hover:text-blue-500"><FaShoppingCart className="inline text-xl" /></Link>
// //           <Link to="/addproduct" className="hover:text-blue-500">Add Product</Link>
// //           <Link to="/sellerdashboard" className="hover:text-blue-500">Seller Dashboard</Link>
// //         </div>

// //         {/* User profile dropdown or login/signup */}
// //         {user ? (
// //           <div className="relative" ref={dropdownRef}>
// //             <button onClick={() => setDropdownOpen(!dropdownOpen)}>
// //               <FaUserCircle className="text-2xl" />
// //             </button>
// //             {dropdownOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
// //                 <Link to="/updateprofile" className="block px-4 py-2 hover:bg-gray-100">Update Profile</Link>
// //                 <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
// //                   Logout
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="flex space-x-2">
// //             <Link to="/login">
// //               <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
// //             </Link>
// //             <Link to="/signup">
// //               <button className="bg-gray-300 px-4 py-2 rounded">Sign Up</button>
// //             </Link>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import { useState, useEffect, useRef } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
// // import image from '../../assets/Hs.png';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);  // For mobile menu toggle
// //   const [dropdownOpen, setDropdownOpen] = useState(false);  // For dropdown toggle
// //   const [user, setUser] = useState(null);
// //   const [lastScrollY, setLastScrollY] = useState(0);  // Track last scroll position
// //   const [showNavbar, setShowNavbar] = useState(true);  // Control navbar visibility
// //   const navigate = useNavigate();
// //   const dropdownRef = useRef(null);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //     setDropdownOpen(false);
// //     navigate("/");
// //   };

// //   useEffect(() => {
// //     const userData = JSON.parse(localStorage.getItem("user"));
// //     if (userData) {
// //       setUser(userData);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > lastScrollY) {
// //         // Scroll Down
// //         setShowNavbar(false);
// //       } else {
// //         // Scroll Up
// //         setShowNavbar(true);
// //       }
// //       setLastScrollY(window.scrollY);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScrollY]);

// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// //         setDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     <nav
// //       className={`bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? "transform-none" : "-translate-y-full"}`}
// //     >
// //       <Link to="/" className="text-2xl font-semibold"> <img src={image} alt="Logo" className="h-16" /></Link>

// //       {/* Hamburger icon for mobile */}
// //       <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
// //         {isOpen ? <FaTimes /> : <FaBars />}
// //       </button>

// //       {/* Navigation links */}
// //       <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
// //         {/* Desktop Navigation links */}
// //         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
// //           <Link to="/" className="hover:text-blue-500">Home</Link>
// //           <Link to="/products" className="hover:text-blue-500">Products</Link>
// //           <Link to="/cloths" className="hover:text-blue-500">Cloths</Link>
// //           <Link to="/electronics" className="hover:text-blue-500">Electronics</Link>
// //           <Link to="/groceries" className="hover:text-blue-500">Groceries</Link>
// //           <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
// //           <Link to="/customerdashboard" className="hover:text-blue-500">Customer Dashboard</Link>
// //           <Link to="/cart" className="hover:text-blue-500"><FaShoppingCart className="inline text-xl" /></Link>
// //           {/* Conditionally show links for Sellers */}
// //           {user && user.userType === "Seller" && (
// //             <>
// //               <Link to="/addproduct" className="hover:text-blue-500">Add Product</Link>
// //               <Link to="/sellerdashboard" className="hover:text-blue-500">Seller Dashboard</Link>
// //             </>
// //           )}
// //         </div>

// //         {/* User profile dropdown or login/signup */}
// //         {user ? (
// //           <div className="relative" ref={dropdownRef}>
// //             <button onClick={() => setDropdownOpen(!dropdownOpen)}>
// //               <FaUserCircle className="text-2xl" />
// //             </button>
// //             {dropdownOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
// //                 <Link to="/updateprofile" className="block px-4 py-2 hover:bg-gray-100">Update Profile</Link>
// //                 <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
// //                   Logout
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="flex space-x-2">
// //             <Link to="/login">
// //               <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
// //             </Link>
// //             <Link to="/signup">
// //               <button className="bg-gray-300 px-4 py-2 rounded">Sign Up</button>
// //             </Link>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
// import image from '../../assets/Hs.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);  // For mobile menu toggle
//   const [dropdownOpen, setDropdownOpen] = useState(false);  // For dropdown toggle
//   const [user, setUser] = useState(null);
//   const [lastScrollY, setLastScrollY] = useState(0);  // Track last scroll position
//   const [showNavbar, setShowNavbar] = useState(true);  // Control navbar visibility
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setDropdownOpen(false);
//     navigate("/");
//   };

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData) {
//       setUser(userData);
//     }
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         // Scroll Down
//         setShowNavbar(false);
//       } else {
//         // Scroll Up
//         setShowNavbar(true);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav
//       className={`bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? "transform-none" : "-translate-y-full"}`}
//     >
//       <Link to="/" className="text-2xl font-semibold"> <img src={image} alt="Logo" className="h-16" /></Link>

//       {/* Hamburger icon for mobile */}
//       <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Navigation links */}
//       <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
//         {/* Desktop Navigation links */}
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
//           <Link to="/" className="hover:text-blue-500">Home</Link>
//           <Link to="/products" className="hover:text-blue-500">Products</Link>
//           <Link to="/cloths" className="hover:text-blue-500">Cloths</Link>
//           <Link to="/electronics" className="hover:text-blue-500">Electronics</Link>
//           <Link to="/groceries" className="hover:text-blue-500">Groceries</Link>
//           <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
//           {/* Conditionally show the Customer Dashboard link if user is logged in */}
//           {user && user.userType === 'Buyer' && <Link to="/customerdashboard" className="hover:text-blue-500">Customer Dashboard</Link>}
//           <Link to="/cart" className="hover:text-blue-500"><FaShoppingCart className="inline text-xl" /></Link>
//           {/* Conditionally show links for Sellers */}
//           {user && user.userType === "Seller" && (
//             <>
//               <Link to="/addproduct" className="hover:text-blue-500">Add Product</Link>
//               <Link to="/sellerdashboard" className="hover:text-blue-500">Seller Dashboard</Link>
//             </>
//           )}
//         </div>

//         {/* User profile dropdown or login/signup */}
//         {user ? (
//           <div className="relative" ref={dropdownRef}>
//             <button onClick={() => setDropdownOpen(!dropdownOpen)}>
//               <FaUserCircle className="text-2xl" />
//             </button>
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
//                 <Link to="/updateprofile" className="block px-4 py-2 hover:bg-gray-100">Update Profile</Link>
//                 <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="flex space-x-2">
//             <Link to="/login">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
//             </Link>
//             <Link to="/signup">
//               <button className="bg-gray-300 px-4 py-2 rounded">Sign Up</button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import image from '../../assets/Hs.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
    
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? "transform-none" : "-translate-y-full"}`}>
      <Link to="/" className="text-2xl font-semibold">
        <img src={image} alt="Logo" className="h-16" />
      </Link>

      <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {!user && (
            <>
              <Link to="/" className="hover:text-blue-500">Home</Link>
              <Link to="/products" className="hover:text-blue-500">Products</Link>
              <Link to="/cloths" className="hover:text-blue-500">Cloths</Link>
              <Link to="/electronics" className="hover:text-blue-500">Electronics</Link>
              <Link to="/groceries" className="hover:text-blue-500">Groceries</Link>
              <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
            </>
          )}

          {user && user.userType === "Buyer" && (
            <>
              <Link to="/" className="hover:text-blue-500">Home</Link>
              <Link to="/products" className="hover:text-blue-500">Products</Link>
              <Link to="/cloths" className="hover:text-blue-500">Cloths</Link>
              <Link to="/electronics" className="hover:text-blue-500">Electronics</Link>
              <Link to="/groceries" className="hover:text-blue-500">Groceries</Link>
              <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
              <Link to="/customerdashboard" className="hover:text-blue-500">Customer Dashboard</Link>
              <Link to="/cart" className="hover:text-blue-500">
                <FaShoppingCart className="inline text-xl" />
              </Link>
            </>
          )}

          {user && user.userType === "Seller" && (
            <>
              <Link to="/addproduct" className="hover:text-blue-500">Add Product</Link>
              <Link to="/sellerdashboard" className="hover:text-blue-500">Seller Dashboard</Link>
            </>
          )}
        </div>

        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <FaUserCircle className="text-2xl" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <Link to="/updateprofile" className="block px-4 py-2 hover:bg-gray-100">Update Profile</Link>
                <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-2">
            <Link to="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-gray-300 px-4 py-2 rounded">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import Signup from './pages/Users/Signup';
// import Login from './pages/Users/Login';
// import Update from './pages/Users/Update';

// import Home from './pages/Home/Home';
// import Products from './pages/Products/Products';
// import Cloths from './pages/Cloths/Cloths';
// import Footwear from './pages/Footwear/Footwear';
// import Groceries from './pages/Groceries/Groceries';
// import Electronics from './pages/Electronics/Electronics';

// import Cart from './pages/Cart/Cart';
// import Paymentpage from './pages/Paymentpage/Paymentpage';
// import Contact from './pages/Contactpage/Contact';
// import Productadding from './pages/Productadding/Productadding';

// import Customerdashboard from './pages/Customerdashboard/Customerdashboard';
// import Navbar from './compoenents/shared/Navbar';
// import ProductDescription from './compoenents/Description/Productdescription';
// import Employeedashboard from './pages/EmployeerDasboard/Employeedashboard';
// import Footer from './compoenents/shared/Footer';
// import Editproduct from './compoenents/EmployeeDashboard/Editproduct';

// function App() {


//   return (
//     <BrowserRouter>
//     <>
//       { <Navbar />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/cloths" element={<Cloths />} />
//         {/* <Route path="/footwear" element={<Footwear />} /> */}
//         <Route path="/groceries" element={<Groceries />} />
//         <Route path="/electronics" element={<Electronics />} />
//         <Route path="/productdescription/:id" element={<ProductDescription />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/payment" element={<Paymentpage />} />
//         <Route path="/contact-us" element={<Contact />} />
//         <Route path="/update" element={<Update />} />
//         <Route path="/addproduct" element={<Productadding />} />
//         <Route path="/sellerdashboard" element={<Employeedashboard />} />
//         <Route path="/editproduct/:id" element={<Editproduct />} />
//         <Route path="/customerdashboard" element={<Customerdashboard />} />
//       </Routes>

//       { <Footer />}
//     </>
//     </BrowserRouter>
//   );
// }
// export default App

// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import Signup from './pages/Users/Signup';
// import Login from './pages/Users/Login';
// import Update from './pages/Users/Update';

// import Home from './pages/Home/Home';
// import Products from './pages/Products/Products';
// import Cloths from './pages/Cloths/Cloths';
// import Groceries from './pages/Groceries/Groceries';
// import Electronics from './pages/Electronics/Electronics';

// import Cart from './pages/Cart/Cart';
// import Paymentpage from './pages/Paymentpage/Paymentpage';
// import Contact from './pages/Contactpage/Contact';
// import Productadding from './pages/Productadding/Productadding';

// import Customerdashboard from './pages/Customerdashboard/Customerdashboard';
// import Navbar from './compoenents/shared/Navbar';
// import ProductDescription from './compoenents/Description/Productdescription';
// import Employeedashboard from './pages/EmployeerDasboard/Employeedashboard';
// import Footer from './compoenents/shared/Footer';
// import Editproduct from './compoenents/EmployeeDashboard/Editproduct';

// function App() {
//   const user = JSON.parse(localStorage.getItem("user"));  // Get user from localStorage
  
//   return (
//     <BrowserRouter>
//       <>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/products" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<Products />} />
//           <Route path="/cloths" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<Cloths />} />
//           <Route path="/groceries" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<Groceries />} />
//           <Route path="/electronics" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<Electronics />} />
//           <Route path="/productdescription/:id" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<ProductDescription />} />
//           <Route path="/cart" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<Cart />} />
//           <Route path="/payment" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<Paymentpage />} />
//           <Route path="/contact-us" element={user && user.userType === 'Buyer' ? <Customerdashboard /> :<Contact />} />
//           <Route path="/update" element={<Update />} />

//           {/* Protected Routes */}
//           <Route 
//             path="/addproduct" 
//             element={user && user.userType === 'Seller' ? <Productadding /> : <Navigate to="/" />} 
//           />
//           <Route 
//             path="/sellerdashboard" 
//             element={user && user.userType === 'Seller' ? <Employeedashboard /> : <Navigate to="/" />} 
//           />
//           <Route 
//             path="/customerdashboard" 
//             element={user && user.userType === 'Buyer' ? <Customerdashboard /> : <Navigate to="/" />} 
//           />

//           {/* Edit product route should be protected as well */}
//           <Route path="/editproduct/:id" element={<Editproduct />} />

//         </Routes>

//         <Footer />
//       </>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


import Signup from './pages/Users/Signup';
import Login from './pages/Users/Login';
import Update from './pages/Users/Update';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Cloths from './pages/Cloths/Cloths.jsx';
import Groceries from './pages/Groceries/Groceries';
import Electronics from './pages/Electronics/Electronics';

import Cart from './pages/Cart/Cart';
import Paymentpage from './pages/Paymentpage/Paymentpage';
import Contact from './pages/Contactpage/Contact';
import Productadding from './pages/Productadding/Productadding';

import Customerdashboard from './pages/Customerdashboard/Customerdashboard';
import Navbar from './compoenents/shared/Navbar';
import ProductDescription from './compoenents/Description/Productdescription';
import Employeedashboard from './pages/EmployeerDasboard/Employeedashboard';
import Footer from './compoenents/shared/Footer';
import Editproduct from './compoenents/EmployeeDashboard/Editproduct';

function App() {
  const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage

  return (
    <BrowserRouter>
      <>
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cloths" element={<Cloths />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/productdescription/:id" element={<ProductDescription />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Paymentpage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/update" element={<Update />} />

          {/* Buyer-only Route */}
          <Route
            path="/customerdashboard"
            element={user && user.userType === 'Buyer' ? <Customerdashboard /> : <Navigate to="/" />}
          />

          {/* Seller-only Routes */}
          {user && user.userType === 'Seller' && (
            <>
              <Route path="/addproduct" element={<Productadding />} />
              <Route path="/sellerdashboard" element={<Employeedashboard />} />
              <Route path="/editproduct/:id" element={<Editproduct />} />
            </>
          )}

          {/* Redirect all undefined or unauthorized access */}
          <Route path="/editproduct/:id" element={<Editproduct />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;




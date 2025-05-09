// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { signup } from "../../redux/Slices/userSlice";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {

//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phonenumber: "",
//     userType: "", // No default selection
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", form);


//   if (res.payload?.success) {
//     navigate('/login'); // Navigate to login only after successful signup
//   } else {
//     alert(res.payload?.message); // Show error if any
//   }

//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-center text-xl font-semibold">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <label className="block">
//             <span className="text-gray-700">Full Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700">Email Address</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700">Password</span>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700">Phone Number</span>
//             <input
//               type="number"
//               name="phonenumber"
//               value={form.phonenumber}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700">User Type</span>
//             <select
//               name="userType"
//               value={form.userType}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
//               required
//             >
//               <option value="">Choose</option>
//               <option value="Buyer">Buyer</option>
//               <option value="Seller">Seller</option>
//             </select>
//           </label>
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    userType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted", form);

    try {
      const res = await dispatch(signup(form)); // ✅ dispatch the thunk
      if (res.payload?.success) {
        navigate('/login'); // redirect if successful
      } else {
        alert(res.payload?.message || "Signup failed"); // show error
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-center text-xl font-semibold">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <label className="block">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email Address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Phone Number</span>
            <input
              type="number"
              name="phonenumber"
              value={form.phonenumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">User Type</span>
            <select
              name="userType"
              value={form.userType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Choose</option>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
          </label>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

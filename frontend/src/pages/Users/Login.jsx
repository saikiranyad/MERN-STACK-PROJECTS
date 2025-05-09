// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/Slices/userSlice';
// import {useNavigate} from 'react-router-dom'

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Login Form Submitted', form);
    
//     if (login.fulfilled.match(result)) {
//       localStorage.setItem('token', result.payload?.token);
//       localStorage.setItem('user', JSON.stringify(result.payload?.user));
//       setForm({ email: '', password: '' });
//       if(result.payload?.user.userType === 'Seller'){
//         navigate('/sellerdashboard');
//       }else{
//       navigate('/');
//       }

//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
//         <h2 className="text-center text-xl font-semibold">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <label className="block">
//             <span className="text-gray-700">Email Address</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Form Submitted', form);

    try {
      const result = await dispatch(login(form));

      if (login.fulfilled.match(result)) {
        const { token, user } = result.payload;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setForm({ email: '', password: '' });

        // Redirect based on user type
        if (user.userType === 'Seller') {
          navigate('/sellerdashboard');
          window.location.reload()
        } else {
          navigate('/');
          window.location.reload()
        }
      } else {
        console.error('Login failed:', result.error.message);
        alert('Login failed: ' + result.error.message);
      }
    } catch (error) {
      console.error('Unexpected error during login:', error);
      alert('An unexpected error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-center text-xl font-semibold">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <label className="block">
            <span className="text-gray-700">Email Address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

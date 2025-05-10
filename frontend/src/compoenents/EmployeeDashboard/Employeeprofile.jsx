// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Employeeprofile = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleDelete = () => {
//     localStorage.removeItem('user');
//     navigate('/');
//   };

//   if (!user) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-1/2 mx-auto mt-10">
//       <div className="flex flex-col sm:flex-row items-center gap-6">
//         <img
//           src={user.avatar || "https://randomuser.me/api/portraits/men/75.jpg"}
//           alt="Seller Avatar"
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="text-2xl font-semibold">{user.name}</h2>
//           <p className="text-gray-600">{user.email}</p>
//           <p className="text-gray-500">{user.phonenumber}</p>
//           <div className="flex gap-4 mt-6">
//             <Link
//               to="/update"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Update Profile
//             </Link>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               onClick={handleDelete}
//             >
//               Delete Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Employeeprofile;






// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteuser } from '../../redux/slices/userSlice'; // Import deleteuser action

// const Employeeprofile = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { success, loading, error } = useSelector((state) => state.user);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleDelete = async () => {
//     try {
//       await dispatch(deleteuser()).unwrap(); // Dispatch the delete action and wait for it to complete
//       navigate('/'); // Redirect to homepage after successful deletion
//     } catch (err) {
//       console.log(err);
//       // Handle error, maybe show a toast or alert
//     }
//   };

//   if (!user) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-1/2 mx-auto mt-10">
//       <div className="flex flex-col sm:flex-row items-center gap-6">
//         <img
//           src={user.avatar || "https://randomuser.me/api/portraits/men/75.jpg"}
//           alt="Seller Avatar"
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="text-2xl font-semibold">{user.name}</h2>
//           <p className="text-gray-600">{user.email}</p>
//           <p className="text-gray-500">{user.phonenumber}</p>
//           <div className="flex gap-4 mt-6">
//             <Link
//               to="/update"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Update Profile
//             </Link>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               onClick={handleDelete}
//               disabled={loading} // Disable button while deleting
//             >
//               {loading ? 'Deleting...' : 'Delete Account'}
//             </button>
//           </div>
//         </div>
//       </div>
//       {error && <p className="text-red-500 text-center mt-4">{error}</p>} {/* Show error message */}
//       {success && <p className="text-green-500 text-center mt-4">Account successfully deleted.</p>} {/* Show success message */}
//     </div>
//   );
// };

// export default Employeeprofile;


// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteuser } from '../../redux/slices/userSlice'; // Import deleteuser action

// const Employeeprofile = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const {  loading } = useSelector((state) => state.user);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleDelete = async () => {
//     try {
//       await dispatch(deleteuser()).unwrap(); // Dispatch the delete action and wait for it to complete
//       localStorage.removeItem('user'); // Remove user from localStorage
//       setUser(null); // Reset user state
//       navigate('/'); // Redirect to homepage after successful deletion
//       window.location.reload();
//     } catch (err) {
//       console.log(err);
//       // Handle error, maybe show a toast or alert
//     }
//   };

//   if (!user) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-1/2 mx-auto mt-10">
//       <div className="flex flex-col sm:flex-row items-center gap-6">
//         <img
//           src={user.avatar || "https://randomuser.me/api/portraits/men/75.jpg"}
//           alt="Seller Avatar"
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="text-2xl font-semibold">{user.name}</h2>
//           <p className="text-gray-600">{user.email}</p>
//           <p className="text-gray-500">{user.phonenumber}</p>
//           <div className="flex gap-4 mt-6">
//             <Link
//               to="/update"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Update Profile
//             </Link>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               onClick={handleDelete}
//               disabled={loading} // Disable button while deleting
//             >
//               {loading ? 'Deleting...' : 'Delete Account'}
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* {error && <p className="text-red-500 text-center mt-4">{error}</p>} Show error message */}
//       {/* {success && <p className="text-green-500 text-center mt-4">Account successfully deleted.</p>} Show success message */}
//     </div>
//   );
// };

// export default Employeeprofile;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser } from "../../redux/Slices/userSlice";

const Employeeprofile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleDelete = async () => {
    try {
      await dispatch(deleteuser()).unwrap();
      localStorage.removeItem('user');
      setUser(null);
      navigate('/');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
        <img
          src={user.avatar || "https://randomuser.me/api/portraits/men/75.jpg"}
          alt="User Avatar"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
        />
        <div className="flex-1 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{user.name}</h2>
          <p className="text-gray-600 text-sm sm:text-base">{user.email}</p>
          <p className="text-gray-500 text-sm sm:text-base">{user.phonenumber}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              to="/update"
              className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition"
            >
              Update Profile
            </Link>
            <button
              onClick={handleDelete}
              disabled={loading}
              className={`w-full sm:w-auto text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-xl transition ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Deleting...' : 'Delete Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employeeprofile;


// // import React from 'react';

// // const Profileuser = () => {
// //   const customer = {
// //     name: "Emily Johnson",
// //     email: "emily.johnson@example.com",
// //     profileImage: "https://via.placeholder.com/150",
// //     address: "123 Main Street, New York, NY",
// //     phone: "+1 234 567 890",
// //     orders: 15,
// //     joined: "March 2022",
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
// //       <div className="flex items-center gap-6">
// //         <img
// //           src={customer.profileImage}
// //           alt="Profile"
// //           className="w-24 h-24 rounded-full"
// //         />
// //         <div>
// //           <h2 className="text-2xl font-semibold">{customer.name}</h2>
// //           <p className="text-gray-600">{customer.email}</p>
// //           <p className="text-gray-600">{customer.phone}</p>
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <h3 className="text-xl font-semibold mb-4">Customer Details</h3>
// //         <p><strong>Address:</strong> {customer.address}</p>
// //         <p><strong>Orders Placed:</strong> {customer.orders}</p>
// //         <p><strong>Joined:</strong> {customer.joined}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profileuser;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';  // Import useHistory to handle navigation
// import { deleteuser } from '../../redux/Slices/userSlice';

// const Profileuser = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user.users);  // Assuming user is in Redux state
//   const navigate = useNavigate();  // Use history to navigate to the update page

//   if (!user) return <div>Loading...</div>;  // Display loading until user data is available

//   const handleDelete = () => {
//     // Add confirmation before deletion
//     const confirmDelete = window.confirm("Are you sure you want to delete your account?");
//     if (confirmDelete) {
//       dispatch(deleteuser());  // Dispatch the delete action
//     }
//   };

//   // Navigate to the update page
//   const navigateToUpdatePage = () => {
//     navigate("/update");  // Redirect to the update profile page
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
//       <div className="flex items-center gap-6">
//         <img
//           src={user.avatar || "https://via.placeholder.com/150"}
//           alt="Profile"
//           className="w-24 h-24 rounded-full"
//         />
//         <div>
//           <h2 className="text-2xl font-semibold">{user.name}</h2>
//           <p className="text-gray-600">{user.email}</p>
//           <p className="text-gray-600">{user.phone}</p>
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-xl font-semibold mb-4">User Details</h3>
//         <p><strong>Address:</strong> {user.address}</p>
//         <p><strong>Orders Placed:</strong> {user.orders}</p>
//         <p><strong>Joined:</strong> {user.joined}</p>
        
//         {/* Buttons Side by Side */}
//         <div className="flex gap-4 mt-4">
//           {/* Update Button */}
//           <button
//             onClick={navigateToUpdatePage}  // Navigate to update profile page
//             className="bg-green-500 text-white py-2 px-4 rounded"
//           >
//             Update Profile
//           </button>

//           {/* Delete Button */}
//           <button
//             onClick={handleDelete}
//             className="bg-red-500 text-white py-2 px-4 rounded"
//           >
//             Delete Account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profileuser;





import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteuser } from '../../redux/Slices/userSlice';

const Profileuser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      dispatch(deleteuser());
    }
  };

  const navigateToUpdatePage = () => {
    navigate("/update");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold">{user.name}</h2>
          <p className="text-gray-600 break-words">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">User Details</h3>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Orders Placed:</strong> {user.orders}</p>
        <p><strong>Joined:</strong> {user.joined}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={navigateToUpdatePage}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center w-full sm:w-auto"
        >
          Update Profile
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-center w-full sm:w-auto"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profileuser;

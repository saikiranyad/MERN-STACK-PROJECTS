// import { useEffect, useState } from "react"

// import { useNavigate } from "react-router-dom"


// const Update = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phonenumber: "",
//   })

//   const navigate = useNavigate()
//   const { users, success, loading, error } = useSelector((state) => state.user)

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   // Set form values when user data is available
//   useEffect(() => {
//     if (users) {
//       setForm({
//         name: users.name || "",
//         phonenumber: users.phonenumber || "",
//       })
//     }
//   }, [users])

//   // Form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//   }

//   // Handle success after update
//   useEffect(() => {
//     if (success) {
//       if (users?.userType === "Seller") {
//         navigate("/addproduct")
//       } else {
//         navigate("/")
//       }

//     }
//   }, [success, users, navigate])

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
//         <h2 className="text-center text-xl font-semibold">Update Profile</h2>
//         {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <label className="block">
//             <span className="text-gray-700">Full Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </label>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
//           >
//             {loading ? "Updating..." : "Update Profile"}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Update




import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { update, resetSuccess } from "../../redux/Slices/userSlice"

const Update = () => {
  const [form, setForm] = useState({
    name: "",
    phonenumber: "",
    avatar: null,
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { users, success, loading, error } = useSelector((state) => state.user)

  useEffect(() => {
    if (users) {
      setForm({
        name: users.name || "",
        phonenumber: users.phonenumber || "",
        avatar: null,
      })
    }
  }, [users])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "avatar") {
      setForm({ ...form, avatar: files[0] })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", form.name)
    formData.append("phonenumber", form.phonenumber)
    if (form.avatar) {
      formData.append("avatar", form.avatar)
    }

    dispatch(update(formData))
  }

  useEffect(() => {
    if (success) {
      dispatch(resetSuccess())
      if (users?.userType === "Seller") {
        navigate("/addproduct")
      } else if(users?.userType === "Buyer"){
        navigate("/")
      }
    }
  }, [success, users, navigate, dispatch])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-center text-xl font-semibold">Update Profile</h2>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <label className="block">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Avatar</span>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update

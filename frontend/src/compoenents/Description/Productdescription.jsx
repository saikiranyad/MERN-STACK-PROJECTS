




// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductById } from "../../redux/slices/productSlice";
// import axios from "axios";
// import { backend } from "../../utils/Constants";


// const ProductDescription = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { selectedProduct: product, allProducts, loading } = useSelector((state) => state.product);
//   const [mainImage, setMainImage] = useState("");
//   const [commentText, setCommentText] = useState("");
//   const [replyText, setReplyText] = useState({});
//   const [nestedReplyText, setNestedReplyText] = useState({});
//   const [showNestedReplyInput, setShowNestedReplyInput] = useState({});
//   const [selectedRating, setSelectedRating] = useState(0);
//   const [commentss,setCommentss] = useState("")
// const navigate = useNavigate()
//   useEffect(() => {
//     dispatch(getProductById(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (product && product.images?.length > 0) {
//       setMainImage(product.images[0]);
//     }
//   }, [product]);

//   const handleAddToCart = async () => {
  
//     try {
      
//         const response = await axios.post(`${backend}/api/cart/postcart`,{id,quantity:1}, {
//           withCredentials: true,
//         });
//        console.log(id)
//         console.log(response.data)
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
  
//   };

//   const handleSubmitComment = async () => {
//     try {
//       const response = await axios.post(`${backend}/api/products/${id}/comment`, { text: commentText }, { withCredentials: true });
//       console.log(response.data)
//       setCommentss()
//       setCommentText("");
//       dispatch(getProductById(id));
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to comment");
//     }
//   };

//   const handleSubmitReply = async (commentId) => {
//     try {
//       const response = await axios.post(`${backend}/api/products/${id}/comment/reply`, {
//         commentId,
//         text: replyText[commentId],
//       }, { withCredentials: true });
//       setReplyText({ ...replyText, [commentId]: "" });
//       dispatch(getProductById(id));
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to reply");
//     }
//   };

//   const handleSubmitNestedReply = async (replyId) => {
//     try {
//       const response = await axios.post(`${backend}/api/products/${id}/comment/reply/counterreply`, {
//         replyId,
//         text: nestedReplyText[replyId],
//       }, { withCredentials: true });
//       setNestedReplyText({ ...nestedReplyText, [replyId]: "" });
//       dispatch(getProductById(id));
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to reply to reply");
//     }
//   };

//   const handleStarRating = async (rating) => {
//     try {
//       const response = await axios.post(`${backend}/api/products/${id}/starrating`, { rating }, { withCredentials: true });
//       setSelectedRating(rating);
//       dispatch(getProductById(id));
//     } catch (err) {
//       alert("Error submitting rating");
//     }
//   };

//   if (loading || !product) return <div className="text-center mt-10">Loading product...</div>;

//   // Log all product comments and replies
//   console.log("Product Comments:", product.comments);

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
//       {/* Product Info */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="flex flex-col items-center">
//           <img src={mainImage} alt={product.name} className="w-96 h-96 object-cover rounded-lg shadow-md" />
//           <div className="flex gap-2 mt-4">
//             {product.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Thumbnail ${index}`}
//                 className="w-20 h-20 object-cover border rounded-lg cursor-pointer hover:border-blue-500"
//                 onClick={() => setMainImage(img)}
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
//           <div className="flex items-center text-yellow-500 my-2">
//             {[...Array(5)].map((_, i) => (
//               <FaStar
//                 key={i}
//                 className={`cursor-pointer ${i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
//                 onClick={() => handleStarRating(i + 1)}
//               />
//             ))}
//           </div>
//           <p className="text-3xl font-bold text-blue-600">${product.price}</p>
//           <p className="text-gray-700 mt-2">{product.description}</p>

//           {product.specifications?.length > 0 && (
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
//               <ul className="list-disc list-inside text-gray-700 space-y-1">
//                 {product.specifications.map((spec, i) => (
//                   <li key={i}><span className="font-medium">{spec.key}:</span> {spec.value}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <p className="mt-4 text-gray-600"><span className="font-medium">Sold by:</span> {product.seller}</p>

//           <div className="mt-6 flex gap-4">
//             <button onClick={handleAddToCart} className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition">
//               <FaShoppingCart className="mr-2" /><Link to='/cart'>Add to Cart</Link>
//             </button>
//             <button className="flex items-center bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition">
//               <FaBolt className="mr-2" /> Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Comments */}
//       <div className="mt-10">
//         <h3 className="text-xl font-semibold mb-2">Comments</h3>
//         <textarea
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           placeholder="Add a comment..."
//           className="w-full p-2 border rounded mb-2"
//         />
//         <button onClick={handleSubmitComment} className="px-4 py-2 bg-blue-600 text-white rounded">
//           Post Comment
//         </button>

//         <div className="mt-6 space-y-4">
//           {product.comments?.map((comment) => {
//             // Log each comment's details
            
//             console.log("Comment User:", comment?.userId.name );

//             return (
//               <div key={comment._id} className="border p-3 rounded">
//                 <p className="font-semibold">{comment.userId?.name }</p>
//                 <p>{comment.text}</p>

//                 <textarea
//                   value={replyText[comment._id] || ""}
//                   onChange={(e) => setReplyText({ ...replyText, [comment._id]: e.target.value })}
//                   placeholder="Reply..."
//                   className="w-full p-1 border mt-2 rounded"
//                 />
//                 <button onClick={() => handleSubmitReply(comment._id)} className="text-sm mt-1 px-2 py-1 bg-green-600 text-white rounded">
//                   Reply
//                 </button>

//                 {/* Direct Replies */}
//                 {comment.replies?.map((reply) => {
                  

//                   return (
//                     <div key={reply._id} className="ml-6 mt-4 border-l-4 border-blue-200 pl-4">
//                       <p className="font-medium">{reply.userId.name }</p>
//                       <p>{reply.text}</p>

//                       <button
//                         onClick={() =>
//                           setShowNestedReplyInput({ ...showNestedReplyInput, [reply._id]: !showNestedReplyInput[reply._id] })
//                         }
//                         className="text-sm text-purple-600 mt-2"
//                       >
//                         Reply to this reply
//                       </button>

//                       {showNestedReplyInput[reply._id] && (
//                         <div className="mt-2">
//                           <textarea
//                             value={nestedReplyText[reply._id] || ""}
//                             onChange={(e) => setNestedReplyText({ ...nestedReplyText, [reply._id]: e.target.value })}
//                             placeholder="Write your reply..."
//                             className="w-full p-2 border rounded"
//                           />
//                           <button onClick={() => handleSubmitNestedReply(reply._id)} className="mt-1 px-3 py-1 bg-purple-600 text-white text-sm rounded">
//                             Submit Reply
//                           </button>
//                         </div>
//                       )}

//                       {/* Nested Replies */}
//                       {reply.replies?.map((nested, i) => {
//                         console.log("Nested Reply:", nested);
//                         console.log("Nested Reply Text:", nested.text);
//                         console.log("Nested Reply User:", nested.userId?.name );

//                         return (
//                           <div key={i} className="ml-6 mt-2 border-l-2 border-gray-300 pl-4 bg-gray-50 rounded">
//                             <p className="text-sm font-semibold">{nested.userId?.name }</p>
//                             <p className="text-sm">{nested.text}</p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="mt-10">
//         <h3 className="text-2xl font-semibold text-gray-900 mb-4">Related Products</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {allProducts.filter(p => p._id !== product._id).map((related) => (
//             <Link to={`/productdescription/${related._id}`} key={related._id}>
//               <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
//                 <img
//                   src={related.images?.[0] || "/fallback.jpg"}
//                   alt={related.name}
//                   className="w-full h-40 object-cover rounded-md"
//                 />
//                 <div className="mt-3 text-center">
//                   <p className="text-lg font-semibold">{related.name}</p>
//                   <p className="text-blue-600 font-bold">${related.price}</p>
//                   <div className="flex justify-center mt-1 text-yellow-500">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar key={i} className={i < Math.round(related.rating) ? "text-yellow-500" : "text-gray-300"} />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDescription;
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/Slices/productSlice";
import axios from "axios";
import { backend } from "../../utils/Constants";

const ProductDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct: product, allProducts, loading } = useSelector((state) => state.product);
  const [mainImage, setMainImage] = useState("");
  const [commentText, setCommentText] = useState("");
  const [replyText, setReplyText] = useState({});
  const [nestedReplyText, setNestedReplyText] = useState({});
  const [showNestedReplyInput, setShowNestedReplyInput] = useState({});
  const [selectedRating, setSelectedRating] = useState(0);
  const navigate = useNavigate();
  const [visibleComments, setVisibleComments] = useState(2);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  const handleAddToCart = async () => {
    try {
      await axios.post(`${backend}/api/cart/postcart`, { id, quantity: 1 }, { withCredentials: true });
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleSubmitComment = async () => {
    try {
      await axios.post(`${backend}/api/products/${id}/comment`, { text: commentText }, { withCredentials: true });
      setCommentText("");
      dispatch(getProductById(id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to comment");
    }
  };

  const handleSubmitReply = async (commentId) => {
    try {
      await axios.post(`${backend}/api/products/${id}/comment/reply`, {
        commentId,
        text: replyText[commentId],
      }, { withCredentials: true });
      setReplyText({ ...replyText, [commentId]: "" });
      dispatch(getProductById(id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to reply");
    }
  };

  const handleSubmitNestedReply = async (replyId) => {
    try {
      await axios.post(`${backend}/api/products/${id}/comment/reply/counterreply`, {
        replyId,
        text: nestedReplyText[replyId],
      }, { withCredentials: true });
      setNestedReplyText({ ...nestedReplyText, [replyId]: "" });
      dispatch(getProductById(id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to reply to reply");
    }
  };

  const handleStarRating = async (rating) => {
    try {
      await axios.post(`${backend}/api/products/${id}/starrating`, { rating }, { withCredentials: true });
      setSelectedRating(rating);
      dispatch(getProductById(id));
    } catch (err) {
      alert("Error submitting rating");
    }
  };

  if (loading || !product) return <div className="text-center mt-10">Loading product...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-lg shadow">
      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <img src={mainImage} alt={product.name} className="w-full sm:w-96 h-72 sm:h-96 object-cover rounded-lg shadow" />
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded border cursor-pointer hover:border-blue-500"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center text-yellow-500 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`cursor-pointer ${i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
                onClick={() => handleStarRating(i + 1)}
              />
            ))}
          </div>
          <p className="text-2xl font-semibold text-blue-600 mt-2">${product.price}</p>
          <p className="text-gray-700 mt-3">{product.description}</p>

          {product.specifications?.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg text-gray-900">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                {product.specifications.map((spec, i) => (
                  <li key={i}><strong>{spec.key}:</strong> {spec.value}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-4 text-gray-600"><strong>Sold by:</strong> {product.seller}</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-orange-500 text-white px-5 py-2.5 rounded font-semibold hover:bg-orange-600 transition"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="flex items-center justify-center bg-yellow-500 text-white px-5 py-2.5 rounded font-semibold hover:bg-yellow-600 transition">
              <FaBolt className="mr-2" /> Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Comments */}
    {/* Comments */}
<div className="mt-10">
  <h2 className="text-xl font-bold mb-2">Comments</h2>
  <textarea
    value={commentText}
    onChange={(e) => setCommentText(e.target.value)}
    placeholder="Add a comment..."
    className="w-full p-3 border rounded mb-2"
  />
  <button onClick={handleSubmitComment} className="bg-blue-600 text-white px-4 py-2 rounded">
    Post Comment
  </button>

  <div className="mt-6 space-y-4">
    {product.comments?.slice(0, visibleComments).map((comment) => (
      <div key={comment._id} className="border p-3 rounded">
        <p className="font-semibold">{comment.userId?.name}</p>
        <p>{comment.text}</p>

        <textarea
          value={replyText[comment._id] || ""}
          onChange={(e) => setReplyText({ ...replyText, [comment._id]: e.target.value })}
          placeholder="Reply..."
          className="w-full p-2 border rounded mt-2"
        />
        <button onClick={() => handleSubmitReply(comment._id)} className="mt-1 px-3 py-1 text-sm bg-green-600 text-white rounded">
          Reply
        </button>

        {/* Replies */}
        {comment.replies?.map((reply) => (
          <div key={reply._id} className="ml-4 mt-4 border-l-4 border-blue-300 pl-4">
            <p className="font-medium">{reply.userId?.name}</p>
            <p>{reply.text}</p>
            <button
              onClick={() => setShowNestedReplyInput({ ...showNestedReplyInput, [reply._id]: !showNestedReplyInput[reply._id] })}
              className="text-sm text-purple-600 mt-2"
            >
              Reply to this reply
            </button>

            {showNestedReplyInput[reply._id] && (
              <div className="mt-2">
                <textarea
                  value={nestedReplyText[reply._id] || ""}
                  onChange={(e) => setNestedReplyText({ ...nestedReplyText, [reply._id]: e.target.value })}
                  placeholder="Write your reply..."
                  className="w-full p-2 border rounded"
                />
                <button onClick={() => handleSubmitNestedReply(reply._id)} className="mt-1 px-3 py-1 bg-purple-600 text-white text-sm rounded">
                  Submit Reply
                </button>
              </div>
            )}

            {reply.replies?.map((nested, i) => (
              <div key={i} className="ml-4 mt-2 bg-gray-50 p-2 rounded border">
                <p className="text-sm font-semibold">{nested.userId?.name}</p>
                <p className="text-sm">{nested.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    ))}

    {/* Show More Button */}
    {product.comments?.length > visibleComments && (
      <div className="text-center mt-4">
        <button
          onClick={() => setVisibleComments(product.comments.length)}
          className="text-blue-600 font-semibold hover:underline"
        >
          Show More Comments
        </button>
      </div>
    )}
  </div>
</div>


      {/* Related Products */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allProducts.filter(p => p._id !== product._id).slice(0,4).map((related) => (
            <Link to={`/productdescription/${related._id}`} key={related._id}>
              <div className="bg-white border shadow rounded-lg p-3 hover:shadow-lg transition">
                <img
                  src={related.images?.[0] || "/fallback.jpg"}
                  alt={related.name}
                  className="w-full h-32 object-contain rounded"
                />
                <div className="mt-2 text-center">
                  <p className="text-sm font-semibold">{related.name}</p>
                  <p className="text-blue-600 font-bold text-sm">${related.price}</p>
                  <div className="flex justify-center mt-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.round(related.rating) ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

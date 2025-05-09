


import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { backend } from "../../utils/Constants";

const Testimonials = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`${backend}/api/products/allcomments`);
        if (res.data.success) {
          // Filter out reviews where comments array is empty
          const filteredReviews = res.data.usercomments.filter(
            (review) => review.comments && review.comments.length > 0
          );
          // Limit to only 5 reviews
          setReviews(filteredReviews.slice(0, 5)); 
        }
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      }
    };

    fetchComments();
  }, [productId]);
console.log(reviews)
  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Customer Reviews
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mb-3 border-2 border-blue-500"
                />
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                {/* <p className="text-yellow-500 text-xl mt-2">
                  {"⭐".repeat(review.rating || 5)}
                </p> */}
                <p className="text-gray-600 mt-3">{review.comments[0].text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

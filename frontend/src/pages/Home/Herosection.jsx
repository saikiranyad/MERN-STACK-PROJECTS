import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const heroImages = [
  "https://thumbs.dreamstime.com/b/women-portrait-fashion-designer-row-interview-career-job-opportunity-modeling-agency-group-diversity-female-335369007.jpg",
  "https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg?semt=ais_hybrid",
  "https://magora-systems.com/uploads/AQwj_aI0-Br-7TrlmofmSPP3wB26d_G7.webp",
  "https://5.imimg.com/data5/SELLER/Default/2021/4/US/FX/DC/119904249/electronic-gadgets-500x500.jpg",
];

const HeroSection = () => {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    // Select a random image set on reload
    setRandomIndex(Math.floor(Math.random() * heroImages.length));
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Swiper
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectFade, Autoplay]}
        className="w-full h-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-white text-center px-4"
              style={{ backgroundImage: `url('${heroImages[(randomIndex + index) % heroImages.length]}')` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 p-6 rounded-lg">
                <h1 className="text-3xl md:text-5xl font-bold">Explore the Best Deals!</h1>
                <p className="mt-2 text-lg">Exclusive discounts on top brands.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

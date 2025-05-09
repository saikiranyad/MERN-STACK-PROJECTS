import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src="https://thumbs.dreamstime.com/b/young-parents-daughter-grocery-store-stand-front-salad-shelf-pick-up-people-smile-happy-family-together-142311179.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600">
            Welcome to our platform! We are dedicated to providing the best products at unbeatable prices.
            Our mission is to deliver high-quality products and an exceptional shopping experience.
          </p>
          <p className="mt-4 text-gray-600">
            With a team of passionate individuals, we continuously innovate and improve our services to meet
            customer needs.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

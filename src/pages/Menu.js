import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaThumbsUp, FaStar } from 'react-icons/fa';

const jsonServerUrl = 'http://localhost:5000';

const Menu = () => {
  const [productsList, setProductsList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        const response = await fetch(`${jsonServerUrl}/productsList`);
        const data = await response.json();

        // Assuming your JSON server returns an array of products under "productsList"
        setProductsList(data);
      } catch (error) {
        console.error('Error fetching Products List:', error);
      }
    };

    fetchProductsList();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? productsList.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === productsList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
<div className="flex items-center h-full  bg-pink-200">
  <div className="relative  border p-4 rounded-xl shadow-md w-full">
    <FaChevronLeft
      size={30}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={handlePrev}
    />
    <div className="relative w-40 h-60 md:w-1/5 float-right">
      <img
        src={productsList[currentIndex]?.image}
        alt={productsList[currentIndex]?.name}
        className="w-full h-full rounded-xl object-cover relative right-10"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="p-4 md:p-5 w-full">
      <h3 className="text-5xl font-bold text-gray-800">{productsList[currentIndex]?.name}</h3>
    </div>
    <div className="flex-row relative left-10">
    <div className="flex flex-row items-center mt-2">
      <span className="mr-2 text-xl">Rating:</span>
      <span className="text-black-500 text-xl">{productsList[currentIndex]?.rating || 3.7}</span>
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-200" />
      <FaStar className="text-yellow-100" />
    </div>
    <div className="flex items-center mt-1 ">
      <span className="mr-2 text-xl">Likes:</span>
      <span className="text-xl">{productsList[currentIndex]?.likes || 782}</span>
      <FaThumbsUp className="ml-1 text-blue-500" />
    </div>
    </div>
    <br/>
    <div className="relative left-10">
    <h1>
      Indulge in a culinary journey at Techarion, where flavors come to life.
    </h1>
    <h1>
      Our menu features a delightful selection of signature dishes, crafted with care using fresh, locally sourced ingredients.
    </h1>
    <h1>
      From cozy ambiance to impeccable service, every aspect is designed to make your dining experience memorable.
    </h1>
    <h1>
      Join us for a feast that celebrates the art of good food and great company.
    </h1>
    <h1>
      Welcome to a world of flavor! 🍽️✨
    </h1>
    </div>
    <FaChevronRight
      size={30}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={handleNext}
    />
  </div>
</div>



  );
};

export default Menu;

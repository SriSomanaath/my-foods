import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaThumbsUp } from 'react-icons/fa';


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
<div className="relative bg-white border p-4 rounded-xl shadow-md" style={{ height: '400px' }}>
  <FaChevronLeft
    size={30}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={handlePrev}
  />
  <img
    src={productsList[currentIndex]?.image}
    alt={productsList[currentIndex]?.name}
    className="w-full h-full rounded-t-xl object-cover"
  />
  <FaChevronRight
    size={30}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={handleNext}
  />
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800">{productsList[currentIndex]?.name}</h3>
    <p className="mt-1 text-gray-500">{productsList[currentIndex]?.description}</p>
    <div className="flex items-center mt-2">
      <span className="mr-2">Rating:</span>
      <span className="text-yellow-500">{productsList[currentIndex]?.rating || 0}</span>
    </div>
    <div className="flex items-center mt-1">
      <span className="mr-2">Likes:</span>
      <span>{productsList[currentIndex]?.likes || 0}</span>
      <FaThumbsUp className="ml-1 text-blue-500" />
    </div>
  </div>
</div>


  );
};

export default Menu;

import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <div className="flex">
       <img src="./images/InterfaceImage.png" className="w-full blur-xs brightness-50" alt="Interface" />
       <div className="absolute inset-y-0 right-0 flex items-center justify-center text-white p-4">
       <div className="flex flex-col items-center">
        <h1 className="text-5xl text-white font-serif mb-4">DESSERT | BAR | KITCHEN</h1>
        <h3 className="text-center text-2xl font-serif">The Barn is a global food experience and our dessert bar is legendary!</h3>
        <button className="text-black text-left bg-blue-100 rounded-lg p-2 m-5">
        Contact us
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';

const ProductCard = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [valueText, setValueText] = useState('LightSalmon');
  const [price, setPrice] = useState('$130.00');

  const handleButtonClick = (buttonNumber, value, price) => {
    setActiveButton(buttonNumber);
    setValueText(value);
    setPrice(price);
  };

  return (
    <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" style={{ width: '327.667px', marginRight: '30px' }}>
      <div className="group">
        <div className="inline-block overflow-hidden h-full w-full relative">
          <a href="#" className="block transition-all duration-500 transform group-hover:scale-105">
            <img src="./assets/images/img-414.jpg" className="block group-hover:hidden transition-transform duration-500 transform scale-100" alt="" />
            <img src="./assets/images/img-414.jpg" className="hidden group-hover:block transition-transform duration-500 transform scale-100" alt="" />
          </a>
          <div className="absolute cursor-pointer inset-x-0 bottom-0 p-1.5 xl:p-5 xl:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-between gap-1 xl:gap-5">
              <div className="flex-shrink">
                <div className="h-10 w-10 hidden md:flex items-center justify-center bg-white drop-shadow-lg text-zinc-950 hover:text-yellow-700 transition-all duration-500 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" aria-hidden="true" focusable="false" role="presentation" className="icon icon-wishlist h-full w-full fill-current">
                    <path d="M 15 7 C 7.832031 7 2 12.832031 2 20 C 2 34.761719 18.695313 42.046875 24.375 46.78125 L 25 47.3125 L 25.625 46.78125 C 31.304688 42.046875 48 34.761719 48 20 C 48 12.832031 42.167969 7 35 7 C 30.945313 7 27.382813 8.925781 25 11.84375 C 22.617188 8.925781 19.054688 7 15 7 Z M 15 9 C 18.835938 9 22.1875 10.96875 24.15625 13.9375 L 25 15.1875 L 25.84375 13.9375 C 27.8125 10.96875 31.164063 9 35 9 C 41.085938 9 46 13.914063 46 20 C 46 32.898438 31.59375 39.574219 25 44.78125 C 18.40625 39.574219 4 32.898438 4 20 C 4 13.914063 8.914063 9 15 9 Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <button className="inline-block py-2 w-full px-4 text-base font-medium uppercase drop-shadow-lg text-zinc-950 bg-white hover:text-white hover:bg-yellow-700 transition-all duration-500">Add to bag</button>
              </div>
              <div className="flex-shrink">
                <div className="h-10 w-10 hidden md:flex items-center justify-center bg-white drop-shadow-lg text-zinc-950 hover:text-yellow-700 transition-all duration-500 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" aria-hidden="true" focusable="false" role="presentation" className="icon icon-lookup fill-current">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center">
          <a href="#" className="text-lg font-normal">Demonstrate Vonke</a>
          <div className="mb-3">
            <a href="card-product-detail-1.html">
              <span className="text-lg font-medium text-[#131415] hover:underline hover:text-yellow-300 transition-all duration-500 line-clamp-2">
                (Product 1) 
                <span className="text-value"> - {valueText}</span>
              </span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-1">
            <i className="text-sm ri-star-fill text-[#a4a4a4]"></i>
            <i className="text-sm ri-star-fill text-[#a4a4a4]"></i>
            <i className="text-sm ri-star-fill text-[#a4a4a4]"></i>
            <i className="text-sm ri-star-fill text-[#a4a4a4]"></i>
            <i className="text-sm ri-star-fill text-[#a4a4a4]"></i>
          </div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-lg font-bold text-zinc-950">{price}</span>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2.5 xl:mt-4">
            <div
              onClick={() => handleButtonClick(1, 'LightSalmon', '$130.00')}
              className={`h-[34px] w-[34px] flex items-center justify-center rounded-full border-2 cursor-pointer ${
                activeButton === 1 ? 'border-[#454545] bg-white' : 'border-transparent bg-transparent'
              }`}
            >
              <button className="h-6 w-6 rounded-full bg-[#fdba74]"></button>
            </div>
            <div
              onClick={() => handleButtonClick(2, 'LemonChiffon', '$100.00')}
              className={`h-[34px] w-[34px] flex items-center justify-center rounded-full border-2 cursor-pointer ${
                activeButton === 2 ? 'border-[#454545] bg-white' : 'border-transparent bg-transparent'
              }`}
            >
              <button className="h-6 w-6 rounded-full bg-[#fef9c3]"></button>
            </div>
            <div
              onClick={() => handleButtonClick(3, 'lavender', '$132.00')}
              className={`h-[34px] w-[34px] flex items-center justify-center rounded-full border-2 cursor-pointer ${
                activeButton === 3 ? 'border-[#454545] bg-white' : 'border-transparent bg-transparent'
              }`}
            >
              <button className="h-6 w-6 rounded-full bg-[#e6e6fa]"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

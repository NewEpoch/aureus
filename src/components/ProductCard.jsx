import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../images/Damla-Kehribar-Bileklik-resim-619.jpg'; 
import img2 from '../images/kehribar-nasil-olusur.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductCard = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeButton, setActiveButton] = useState(1);
  const [valueText, setValueText] = useState('LightSalmon');
  const [price, setPrice] = useState('$130.00');

  const handleButtonClick = (button, color, priceValue) => {
    setActiveButton(button);
    setValueText(color);
    setPrice(priceValue);
  };

  const products = [
    { img1, img2, title: "Demonstrate Vonke", valueText: "LightSalmon", price: "$130.00" },
    { img1, img2, title: "Demonstrate Vonke", valueText: "LightSalmon", price: "$130.00" },
    { img1, img2, title: "Demonstrate Vonke", valueText: "LightSalmon", price: "$130.00" },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="pb-6 h-auto xl:pb-0"
        onSwiper={setSwiper} // Swiper referansını yakalama
      >
        <SwiperSlide>
          <div className="text-center mt-20">
            <h1 className="text-4xl font-bold">Products</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-52">
            {products.map((product, index) => (
              <div className="group" key={index}>
                <div className="inline-block overflow-hidden h-full w-full relative">
                  <a href="#" className="block transition-all duration-500 transform group-hover:scale-105">
                    <img src={product.img1} className="block group-hover:hidden transition-transform duration-500 transform scale-100" alt={`Product ${index + 1} - Image 1`} />
                    <img src={product.img2} className="hidden group-hover:block transition-transform duration-500 transform scale-100" alt={`Product ${index + 1} - Image 2`} />
                  </a>
                  <div className="absolute cursor-pointer inset-x-0 bottom-0 p-1.5 xl:p-5 xl:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center justify-between gap-1 xl:gap-5">
                      <div className="flex-shrink">
                        <div className="h-10 w-10 hidden md:flex items-center justify-center bg-white drop-shadow-lg text-zinc-950 hover:text-yellow-700 transition-all duration-500 p-2">
                          {/* Sol ok butonu veya başka bir içerik ekleyebilirsiniz */}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <button className="inline-block py-2 w-full px-4 text-base font-medium uppercase drop-shadow-lg text-zinc-950 bg-white hover:text-white hover:bg-yellow-700 transition-all duration-500">
                          Add to bag
                        </button>
                      </div>
                      <div className="flex-shrink">
                        <div className="h-10 w-10 hidden md:flex items-center justify-center bg-white drop-shadow-lg text-zinc-950 hover:text-yellow-700 transition-all duration-500 p-2">
                          {/* Sağ ok butonu veya başka bir içerik ekleyebilirsiniz */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-0 text-center">
                  <a href="#" className="text-lg font-normal">{product.title}</a>
                  <div className="mb-3">
                    <a href="#">
                      <span className="text-lg font-medium text-[#131415] hover:underline hover:text-yellow-300 transition-all duration-500 line-clamp-2">
                        (Product {index + 1}) Sample - Fashionable 
                        <span className="text-value"> - {product.valueText}</span>
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
                    <span className="text-lg font-bold text-zinc-950">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-2.5 xl:mt-4">
                    <div onClick={() => handleButtonClick(1, 'LightSalmon', '$130.00')} className={`h-[34px] w-[34px] flex items-center justify-center rounded-full border-2 cursor-pointer ${activeButton === 1 ? 'border-[#454545] bg-white' : 'border-transparent bg-transparent'}`}>
                      <button className="h-6 w-6 rounded-full bg-[#fdba74]"></button>
                    </div>
                    <div onClick={() => handleButtonClick(2, 'LemonChiffon', '$100.00')} className={`h-[34px] w-[34px] flex items-center justify-center rounded-full border-2 cursor-pointer ${activeButton === 2 ? 'border-[#454545] bg-white' : 'border-transparent bg-transparent'}`}>
                      <button className="h-6 w-6 rounded-full bg-[#fef9c3]"></button>
                    </div>
                    <div onClick={() => handleButtonClick(3, 'Lavender', '$132.00')} className={`h-[34px] w-[34px] flex items-center justify-center rounded-full border-2 cursor-pointer ${activeButton === 3 ? 'border-[#454545] bg-white' : 'border-transparent bg-transparent'}`}>
                      <button className="h-6 w-6 rounded-full bg-[#e6e6fa]"></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Sol Buton */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Sağ Buton */}
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default ProductCard;

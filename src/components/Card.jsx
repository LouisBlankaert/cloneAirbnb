import React from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Card = ({ city, country, dates, price_per_night, rating, owner, images }) => {
  return (
    <div className="max-w-sm overflow-hidden cursor-pointer relative rounded-lg shadow-lg">
      <div className="text-white absolute top-5 right-5 z-50 text-xl">
        <FaRegHeart />
      </div>
      <Carousel
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        className="rounded-lg"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1} of ${city}, ${country}`} className="w-full rounded-lg" />
          </div>
        ))}
      </Carousel>
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-sm">{city}, {country}</h3>
          <span className="flex items-center text-sm">
            <FaStar className="text-yellow-500 mr-1" /> {rating}
          </span>
        </div>
        <p className="text-gray-700 text-base">Proposée par: {owner}</p>
        <p className="text-gray-700 text-base">{dates}</p>
        <p className="text-gray-700 text-base">
          <b>{price_per_night}€</b> <span>par nuit</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

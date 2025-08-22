'use client';
import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'; // Import the compare slider

const Before_After = ({
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
}: any) => {
  const properties = [
    {
      imgSrc: "/images/p1.jpg",
      imgSrcBefore: "/images/p1.jpg",
      imgSrcAfter: "/images/p3.jpg",
      name: "Beautiful House in the City",
      location: "123 Main St, Downtown",
      city: "City Name",
      price: 1500,
      rating: 4.5,
      reviews: 120,
      beds: 3,
      baths: 2,
      squareFeet: 2000,
    },
    {
      imgSrc: "/images/p1.jpg",
      imgSrcBefore: "/images/p1.jpg",
      imgSrcAfter: "/images/p2.jpg",
      name: "Cozy Apartment in the Suburbs",
      location: "456 Oak St, Suburbia",
      city: "Suburb City",
      price: 1200,
      rating: 4.0,
      reviews: 80,
      beds: 2,
      baths: 1,
      squareFeet: 900,
    },
    {
      imgSrc: "/images/p2.jpg",
      imgSrcBefore: "/images/p1.jpg",
      imgSrcAfter: "/images/p1.jpg",
      name: "Modern Loft in the Downtown",
      location: "789 Elm St, Downtown",
      city: "City Center",
      price: 2000,
      rating: 4.7,
      reviews: 150,
      beds: 2,
      baths: 2,
      squareFeet: 1200,
    },
    {
      imgSrc: "/images/p3.jpg",
      imgSrcBefore: "/images/p1.jpg",
      imgSrcAfter: "/images/p2.jpg",
      name: "Luxury Villa with Ocean View",
      location: "101 Ocean Ave, Beachside",
      city: "Coastal City",
      price: 3000,
      rating: 5.0,
      reviews: 200,
      beds: 4,
      baths: 3,
      squareFeet: 2500,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8" id="before-after-section" >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-5 relative">
            <div className="relative">
              <div className="w-full h-48 relative">
                {/* For the first property, display the comparison slider */}
                {index === 0 ? (
                  <div className="relative">
                    <ReactCompareSlider
                      boundsPadding={0}
                      clip="both"
                      itemOne={
                        <ReactCompareSliderImage
                          alt="Before"
                          src={property.imgSrcBefore} 
                          style={{ 
                            width: "100%", height: "auto" 

                          }}
                          
                        />
                      }
                      itemTwo={
                        <ReactCompareSliderImage
                          alt="After"
                          src={property.imgSrcAfter}
                          style={{
                            width: "100%",
                            height: "auto",
                            filter: 'saturate(1.25) contrast(1.1) drop-shadow(2px 4px 6px black)',
                            
                          }}
                         
                        />
                      }
                      keyboardIncrement="5%"
                      position={50}
                      style={{
                        width: '100%',
                        height: '167px', // Set a fixed height for the slider
                        objectFit: 'cover', // Ensure images cover the container properly
                        zIndex: 1, // Ensure the slider is below the content
                      }}
                    />
                  </div>
                ) : (
                  <Image
                    src={property.imgSrc}
                    alt={property.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Pets Allowed
                </span>
                <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Parking Included
                </span>
              </div>
              {showFavoriteButton && (
                <button
                  className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer z-10"
                  onClick={onFavoriteToggle}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
                    }`}
                  />
                </button>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">
                <Link
                  href="#"
                  className="hover:underline hover:text-blue-600"
                  scroll={false}
                >
                  {property.name}
                </Link>
              </h2>
              <p className="text-gray-600 mb-2">
                {property.location}, {property.city}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="font-semibold">{property.rating.toFixed(1)}</span>
                  <span className="text-gray-600 ml-1">
                    ({property.reviews} Reviews)
                  </span>
                </div>
                <p className="text-lg font-bold mb-3">
                  ${property.price.toFixed(0)}{" "}
                  <span className="text-gray-600 text-base font-normal"> /month</span>
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center gap-4 text-gray-600 mt-5">
                <span className="flex items-center">
                  <Bed className="w-5 h-5 mr-2" />
                  {property.beds} Bed
                </span>
                <span className="flex items-center">
                  <Bath className="w-5 h-5 mr-2" />
                  {property.baths} Bath
                </span>
                <span className="flex items-center">
                  <House className="w-5 h-5 mr-2" />
                  {property.squareFeet} sq ft
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Before_After;

'use client';
import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import Link from "next/link";
import React, { useState , useEffect} from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'; //Import the compare slider

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
  ];
  const propertiesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"price" | "rating" | "none">("none");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState({
    location: "",
    city: "",
    minPrice: 0, // Prix minimum par défaut
    maxPrice: 5000, // Prix maximum par défaut
    ratingRange: [0, 5], // Plage de notation de 0 à 5 par défaut
  });

  // Utilisation d'`useEffect` pour appliquer immédiatement les filtres et tri.
  useEffect(() => {
    setCurrentPage(1); // Réinitialiser la page à la première page chaque fois que les filtres sont modifiés.
  }, [filters, sortBy, sortOrder]);

  // Filtrer les propriétés en fonction des critères sélectionnés
  const filteredProperties = properties.filter((property) => {
    const matchesLocation = property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesCity = property.city.toLowerCase().includes(filters.city.toLowerCase());
    const matchesPrice =
      property.price >= filters.minPrice && property.price <= filters.maxPrice;
    const matchesRating =
      property.rating >= filters.ratingRange[0] && property.rating <= filters.ratingRange[1];
    return matchesLocation && matchesCity && matchesPrice && matchesRating;
  });

  // Calculer l'index de début et de fin des propriétés à afficher
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

  const currentProperties = sortBy === "none"
    ? filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty)
    : filteredProperties
        .sort((a, b) => {
          if (sortBy === "price") {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
          } else {
            return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
          }
        })
        .slice(indexOfFirstProperty, indexOfLastProperty);

  // Fonction pour passer à la page suivante
  const nextPage = () => {
    if (indexOfLastProperty < filteredProperties.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Fonction pour revenir à la page précédente
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction pour aller à une page spécifique
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // Total des pages
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  // Créer une gamme de numéros de pages
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Fonction pour changer l'ordre de tri
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const [by, order] = value.split("-");

    setSortBy(by as "price" | "rating" | "none");
    setSortOrder(order as "asc" | "desc");
  };

  // Fonction pour gérer les filtres
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === "minPrice" || name === "maxPrice") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: parseInt(value, 10),
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  // Fonction pour réinitialiser tous les filtres à leurs valeurs par défaut
  const resetFilters = () => {
    setFilters({
      location: "",
      city: "",
      minPrice: 0,
      maxPrice: 5000,
      ratingRange: [0, 5],
    });
  };

  return (
    <section className="container mx-auto px-4 py-8" id="before-after-section" style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
      {/* Filtres dynamiques avec prix min et max */}
      <div className="flex flex-wrap justify-center mb-4 gap-4">
        <div className="flex items-center">
          <label htmlFor="location" className="mr-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg bg-white text-gray-600"
            placeholder="Enter location"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="city" className="mr-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg bg-white text-gray-600"
            placeholder="Enter city"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="minPrice" className="mr-2">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg bg-white text-gray-600"
            placeholder="Min"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="maxPrice" className="mr-2">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg bg-white text-gray-600"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Section de tri alignée à droite */}
      <div className="flex justify-center mb-4">
        <label htmlFor="sort-options" className="mr-2">Sort By:</label>
        <select
          id="sort-options"
          onChange={handleSortChange}
          className="px-4 py-2 border rounded-lg bg-white text-gray-600"
        >
          <option value="none-asc">Default</option>
          <option value="price-asc">Price Low To High</option>
          <option value="price-desc">Price High To Low</option>
          <option value="rating-asc">Rating Low To High</option>
          <option value="rating-desc">Rating High To Low</option>
        </select>
      </div>

      {/* Bouton Reset */}
      <div className="flex justify-center mb-4">
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Reset Filters
        </button>
      </div>

      {/* Affichage des propriétés en 4 colonnes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentProperties.map((property, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-5 relative">
            <div className="relative">
              <div className="w-full h-48 relative">
                <ReactCompareSlider
                  boundsPadding={0}
                  clip="both"
                  itemOne={
                    <ReactCompareSliderImage
                      alt="Before"
                      src={property.imgSrcBefore} 
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      alt="After"
                      src={property.imgSrcAfter}
                      style={{ width: "100%", height: "auto", filter: 'saturate(1.25) contrast(1.1) drop-shadow(2px 4px 6px black)' }}
                    />
                  }
                  keyboardIncrement="5%"
                  position={50}
                  style={{
                    width: '100%',
                    height: '167px',
                    objectFit: 'cover',
                    zIndex: 1,
                  }}
                />
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
                    className={`w-5 h-5 ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"}`}
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

      {/* Pagination: Affichage des numéros de page */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg mr-2 disabled:opacity-50"
        >
          {"<"}
        </button>

        {/* Affichage des numéros de page */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => goToPage(number)}
            className={`px-4 py-2 border rounded-lg mx-1 ${currentPage === number ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg ml-2 disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default Before_After;
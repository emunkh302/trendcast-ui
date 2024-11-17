// src/components/StarRating.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({ ratings }) {
  const averageRating =
    ratings.reduce((total, rating) => total + rating, 0) / ratings.length || 0;

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            color={ratingValue <= averageRating ? '#ffc107' : '#e4e5e9'}
          />
        );
      })}
      <span>{averageRating.toFixed(1)} / 5</span>
    </div>
  );
}

export default StarRating;

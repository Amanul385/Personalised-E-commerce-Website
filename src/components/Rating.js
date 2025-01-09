import React, { useState } from 'react';

const Rating = ({ initialRating, maxRating  }) => {

    const [rating, setRating] = useState(initialRating);
  
  return (
    <div className="flex items-center">

      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          className={`text-2xl cursor-pointer ${
            index < rating ? 'text-yellow-500' : 'text-gray-400'
          }`}
        

        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;

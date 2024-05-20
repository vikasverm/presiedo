import React from 'react';

const PropertyList = ({ properties, onInterestClick }) => {
  return (
    <div>
      {properties.map((property) => (
        <div key={property.id}>
          <p>Place: {property.place}</p>
          <p>Area: {property.area}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          {/* Display other property details */}
          <button onClick={() => onInterestClick(property.id)}>I'm Interested</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;

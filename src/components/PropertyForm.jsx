import React, { useState } from 'react';

const PropertyForm = ({ onSubmit }) => {
  const [propertyData, setPropertyData] = useState({
    place: '',
    area: '',
    bedrooms: 0,
    bathrooms: 0,
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form validation
    if (!propertyData.place || !propertyData.area || propertyData.bedrooms <= 0 || propertyData.bathrooms <= 0) {
      alert('Please fill out all fields correctly');
      return;
    }
    onSubmit(propertyData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="place" value={propertyData.place} onChange={handleChange} placeholder="Place" />
      <input type="text" name="area" value={propertyData.area} onChange={handleChange} placeholder="Area" />
      <input type="number" name="bedrooms" value={propertyData.bedrooms} onChange={handleChange} placeholder="Bedrooms" />
      <input type="number" name="bathrooms" value={propertyData.bathrooms} onChange={handleChange} placeholder="Bathrooms" />
      {/* Add more input fields for other attributes */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PropertyForm;

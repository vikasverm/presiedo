import React, { useState } from 'react';

const Filter = ({ onSubmit }) => {
  const [filters, setFilters] = useState({
    place: '',
    minBedrooms: 0,
    maxBedrooms: 0,
    // Add more filters as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="place" value={filters.place} onChange={handleChange} placeholder="Place" />
      <input type="number" name="minBedrooms" value={filters.minBedrooms} onChange={handleChange} placeholder="Min Bedrooms" />
      <input type="number" name="maxBedrooms" value={filters.maxBedrooms} onChange={handleChange} placeholder="Max Bedrooms" />
      {/* Add more filter inputs */}
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default Filter;

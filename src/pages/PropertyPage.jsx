import React from 'react';
import PropertyList from '../components/PropertyList';
import SellerDetails from '../components/SellerDetails';
import LikeButton from '../components/LikeButton';
import Filter from '../components/Filter';

const PropertyPage = () => {
  const properties = []; // Get properties from API
  const sellerId = ''; // Get sellerId from property
  const onInterestClick = () => {}; // Handle interest click
  const onLike = () => {}; // Handle like click
  const onSubmitFilter = () => {}; // Handle filter submission

  return (
    <div>
      <h2>Property Page</h2>
      <Filter onSubmit={onSubmitFilter} />
      <PropertyList properties={properties} onInterestClick={onInterestClick} />
      <SellerDetails sellerId={sellerId} />
      <LikeButton onLike={onLike} />
    </div>
  );
};

export default PropertyPage;

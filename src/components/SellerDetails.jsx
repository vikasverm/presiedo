import React, { useState, useEffect } from 'react';

const SellerDetails = ({ sellerId }) => {
  const [sellerDetails, setSellerDetails] = useState(null);

  useEffect(() => {
    // Fetch seller details based on sellerId
    // Example:
    // fetchSellerDetails(sellerId)
    //   .then((data) => setSellerDetails(data))
    //   .catch((error) => console.error('Error fetching seller details:', error));
  }, [sellerId]);

  return (
    <div>
      {sellerDetails ? (
        <div>
          <p>Seller Name: {sellerDetails.name}</p>
          <p>Contact Number: {sellerDetails.contactNumber}</p>
          {/* Display other seller details */}
        </div>
     

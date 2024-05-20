import React from 'react';
import PropertyForm from '../components/PropertyForm';

const DashboardPage = () => {
  const onSubmitProperty = () => {}; // Handle property submission

  return (
    <div>
      <h2>Dashboard Page</h2>
      <PropertyForm onSubmit={onSubmitProperty} />
    </div>
  );
};

export default DashboardPage;

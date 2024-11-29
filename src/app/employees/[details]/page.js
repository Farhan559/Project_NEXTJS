'use client'

import React from 'react';

const Employees = ({ params }) => {
  // Unwrapping the promise with React.use()
  const details = React.use(params);

  if (!details) return <h2>Loading...</h2>;

  return (
    <>
      <h1>Employees: Details</h1>
      <h2>Employee Name: {details.details}</h2>
    </>
  );
};

export default Employees;

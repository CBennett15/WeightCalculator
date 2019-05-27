import React from 'react';

export const ResultScreen = ({ weight, result }) => {
  return (
    <div className="resultscreen">
      {result} {weight}
    </div>
  );
};

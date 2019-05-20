import React from 'react';

export const Button = ({ onClick, text, value, className, disabled }) => {
  return (
    <button
      className={className}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

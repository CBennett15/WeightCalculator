import React from 'react';
import { Button } from '../Button';

export const Division = ({ onClick }) => {
  return (
    <div>
      <Button onClick={onClick} text="2.5" value="2.5" />
      <Button onClick={onClick} text="5" value="5" />
      <Button onClick={onClick} text="10" value="10" />
      <Button onClick={onClick} text="12" value="12" />
      <Button onClick={onClick} text="15" value="15" />
    </div>
  );
};

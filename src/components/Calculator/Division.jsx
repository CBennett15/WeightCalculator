import React from 'react';
import { Button } from '../Button';

export const Division = ({ onClick }) => {
  return (
    <div className="division">
      <Button
        className="divisionbutton"
        onClick={onClick}
        text="x / 2.5"
        value="2.5"
      />
      <Button
        className="divisionbutton"
        onClick={onClick}
        text="x / 5"
        value="5"
      />
      <Button
        className="divisionbutton"
        onClick={onClick}
        text="x / 10"
        value="10"
      />
      <Button
        className="divisionbutton"
        onClick={onClick}
        text="x / 12"
        value="12"
      />
      <Button
        className="divisionbutton"
        onClick={onClick}
        text="x / 15"
        value="15"
      />
    </div>
  );
};

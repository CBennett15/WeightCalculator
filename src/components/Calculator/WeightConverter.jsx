import React from 'react';
import { Button } from '../Button';

export const WeightConverter = ({ pounds, kilos, weight }) => {
  return (
    <div>
      <Button onClick={kilos} text="lbs" disabled={weight !== 'kg'} />
      <Button onClick={pounds} text="kg" disabled={weight !== 'lbs'} />
    </div>
  );
};

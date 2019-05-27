import React from 'react';
import { Button } from '../Button';

export const WeightConverter = ({ pounds, kilos, weight, input }) => {
  return (
    <div className="weightconverter">
      <Button
        className="weightbuttons"
        onClick={kilos}
        text="lbs"
        value={input}
        disabled={weight !== 'kg'}
      />
      <Button
        className="weightbuttons"
        onClick={pounds}
        text="kg"
        value={input}
        disabled={weight !== 'lbs'}
      />
    </div>
  );
};

import React from 'react';
import { Button } from '../Button';

export const Keypad = ({ onClick, onSubmit, onClear, input }) => {
  return (
    <div>
      <div>
        <Button onClick={onClick} value="7" text="7" />
        <Button onClick={onClick} value="8" text="8" />

        <Button onClick={onClick} value="9" text="9" />

        <Button onClick={onClick} value="/" text="/" />
      </div>
      <div>
        <Button onClick={onClick} value="4" text="4" />

        <Button onClick={onClick} value="5" text="5" />

        <Button onClick={onClick} value="6" text="6" />

        <Button onClick={onClick} value="*" text="*" />
      </div>
      <div>
        <Button onClick={onClick} value="1" text="1" />

        <Button onClick={onClick} value="2" text="2" />

        <Button onClick={onClick} value="3" text="3" />

        <Button onClick={onClick} value="-" text="-" />
      </div>
      <div>
        <Button onClick={onClick} value="0" text="0" />

        <Button onClick={onClick} value="." text="." />

        <Button onClick={onSubmit} value={input} text="=" />

        <Button onClick={onClick} value="+" text="+" />
      </div>
      <div>
        <Button onClick={onClear} value="clear" text="clear" />
      </div>
    </div>
  );
};

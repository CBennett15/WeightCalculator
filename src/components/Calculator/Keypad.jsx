import React from 'react';
import { Button } from '../Button';

export const Keypad = ({ onClick, onSubmit, onClear, input }) => {
  return (
    <div className="keypad">
      <div className="keyrows">
        <Button className="button" onClick={onClick} value="7" text="7" />
        <Button className="button" onClick={onClick} value="8" text="8" />

        <Button className="button" onClick={onClick} value="9" text="9" />

        <Button
          className="operatorbutton"
          onClick={onClick}
          value="/"
          text="/"
        />
      </div>
      <div className="keyrows">
        <Button className="button" onClick={onClick} value="4" text="4" />

        <Button className="button" onClick={onClick} value="5" text="5" />

        <Button className="button" onClick={onClick} value="6" text="6" />

        <Button
          className="operatorbutton"
          onClick={onClick}
          value="*"
          text="*"
        />
      </div>
      <div className="keyrows">
        <Button className="button" onClick={onClick} value="1" text="1" />

        <Button className="button" onClick={onClick} value="2" text="2" />

        <Button className="button" onClick={onClick} value="3" text="3" />

        <Button
          className="operatorbutton"
          onClick={onClick}
          value="-"
          text="-"
        />
      </div>
      <div className="keyrows">
        <Button className="button" onClick={onClick} value="0" text="0" />

        <Button className="button" onClick={onClick} value="." text="." />

        <Button
          className="operatorbutton"
          onClick={onSubmit}
          value={input}
          text="="
        />

        <Button
          className="operatorbutton"
          onClick={onClick}
          value="+"
          text="+"
        />
      </div>
      <div className="keyrows">
        <Button
          className="clear"
          onClick={onClear}
          value="clear"
          text="clear"
        />
      </div>
    </div>
  );
};

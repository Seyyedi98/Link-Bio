import { ImageIcon, Palette } from "lucide-react";
import React from "react";

const RadioButtonTogglers = ({ options, setBackground, background }) => {
  return (
    <div className="radio-togglers shadow">
      {options.map((option, index) => (
        <label key={index}>
          <input
            checked={option.value === background}
            onChange={() => setBackground(option.value)}
            type="radio"
            name="bgType"
            value={option.value}
          />
          <span className="gap-2">
            {option.label}
            <option.icon className="h-5 w-5" />
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonTogglers;

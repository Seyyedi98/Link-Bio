import { ImageIcon, Palette } from "lucide-react";
import React from "react";

const RadioButtonTogglers = ({ options }) => {
  return (
    <div className="radio-togglers shadow">
      {options.map((option, index) => (
        <label key={index}>
          <input type="radio" name="bgType" value={option.value} />
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

import React, { useState, useEffect } from "react";
import Wheel from "@uiw/react-color-wheel";
import { color, hsvaToHex } from "@uiw/color-convert";

function ColorPicker() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const hexColor = hsvaToHex(hsva); // Convert HSVA to Hex

  useEffect(() => {
    const backgroundColor = hsvaToHex(hsva);
    document.body.style.backgroundColor = backgroundColor;
  }, [hsva]);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="color-picker-container">
        <h1 className="title">Color Picker</h1>

        {/* Color Wheel and Display */}
        <div className="picker-content">
          <Wheel
            color={hsva}
            onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
            style={{ marginRight: "20px" }} // Add spacing between the wheel and color box
          />

          {/* Color Display Box */}
          <div className="color-box-container">
            <div
              className="color-box"
              style={{
                backgroundColor: hexColor, // Use the converted hex color
              }}
            ></div>
            {/* Display the hex color code */}
            <p className="color-code" style={{ color: hexColor }}>
              {hexColor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;

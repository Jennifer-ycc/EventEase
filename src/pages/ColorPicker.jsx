import React, { useState } from 'react';
import { SketchPicker } from 'react-color';  // You can use other pickers like ChromePicker, TwitterPicker, etc.
import { Header } from '../components';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff'); // Default color

  const handleColorChange = (color) => {
    setColor(color.hex); // Update color state
    document.getElementById('preview').style.backgroundColor = color.hex; // Update preview background
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" style={{ height: '100px', width: '100%' }} />
        <div className="flex justify-center items-center gap-20 flex-wrap mt-10">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <SketchPicker
              color={color}
              onChangeComplete={handleColorChange}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <SketchPicker
              color={color}
              onChangeComplete={handleColorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

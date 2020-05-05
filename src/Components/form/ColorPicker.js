import React, { useState } from 'react';
import { SwatchesPicker } from 'react-color';

function ColorPicker()  {
  const [color, setColor] = useState('#ff0000')
    return (
      <>
        <SwatchesPicker
        color={color}
        onChangeComplete={ (color) => {setColor(color.hex)}}
        />
      </>
      
    )
  }

export default ColorPicker

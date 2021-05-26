import React, { useState, useRef, useEffect, useCallback } from "react"
import * as pageStyles from "./christmas-lights.module.css"
import { HexColorPicker } from "react-colorful";

function Light() {
  const [color, setColor] = useState('#fffff');
  const [showPicker, setPicker] = useState(false);

  const handleColorChange = (color) => {
    setColor(color);
  }

  const globalClickListener = (event) => {
    setPicker(false);
  }

  const togglePicker = (event) => {
    if (showPicker === true) {
      document.addEventListener('click', globalClickListener);
      setPicker(false);
    } else {
      setPicker(true);
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 27) {
      setPicker(false);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  });

  return (
  <>
    <div className={pageStyles.['light__wrapper']}>
      {showPicker &&
        <div className={pageStyles.['light__picker']}>
          <HexColorPicker color={color} onChange={handleColorChange} />
        </div>
      }
      <button className={pageStyles.['light']} style={{ background: color }} onClick={togglePicker}></button>
    </div>
  </>
  )
}

export default Light;

import React, { useState, useRef, useEffect } from "react"
import * as pageStyles from "./christmas-lights.module.css"
import { HexColorPicker } from "react-colorful";

function Light() {
  const [color, setColor] = useState('#fffff');
  const [showPicker, setPicker] = useState(false);
  const [currentKey, setKeyCode] = useState(null);
  const colorRef = useRef(color);
  const pickerRef = useRef(showPicker);
  const keyCodeRef = useRef(currentKey);

  const handleColorChange = (color) => {
    setColor(color);
  }

  const hidePicker = () => {
    setPicker(false);
  }

  const togglePicker = (event) => {
    pickerRef.current === true
      ? setPicker(false)
      : setPicker(true);
  }

  const handleKeyPress = (e) => {
    setKeyCode(e.keyCode);
    if(keyCodeRef.current === 27) {
      hidePicker();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  });

  useEffect(() => {
    colorRef.current = color
  }, [color]);

  useEffect(() => {
    pickerRef.current = showPicker
  }, [showPicker]);

  return (
  <>
    <div className={pageStyles.['light__wrapper']}>
      {showPicker &&
        <div className={pageStyles.['light__picker']}>
          <HexColorPicker color={color} onChange={handleColorChange} />
        </div>
      }
      <button className={pageStyles.['light']} style={{ background: colorRef.current }} onClick={togglePicker}></button>
    </div>
  </>
  )
}

export default Light;

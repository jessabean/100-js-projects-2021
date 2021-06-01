import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./christmas-lights.css";
import { HexColorPicker } from "react-colorful";

function Light() {
  const [color, setColor] = useState('#fffff');
  const [showPicker, setPicker] = useState(false);
  const clickListener = useRef();

  const handleColorChange = (color) => {
    setColor(color);
  }

  const togglePicker = (event) => {
    if (showPicker === true) {
      setPicker(false);
    } else {
      setPicker(true);
    }
  }

  const handleKeyPress = (event) => {
    if(event.keyCode === 27) {
      setPicker(false);
    }
  }

  const handleClickOutside = (event) => {
    if (clickListener.current.contains(event.target)) {
      return;
    }
    setPicker(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  });

  useEffect(() => {
    if (showPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPicker]);

  return (
  <>
    <div className={'light__wrapper'}>
      {!!showPicker &&
        <div ref={clickListener}>
          <div className={'light__picker'}>
            <HexColorPicker color={color} onChange={handleColorChange} />
          </div>
        </div>
      }
      <button className={'light'} style={{ background: color }} onClick={togglePicker}></button>
    </div>
  </>
  )
}

export default Light;

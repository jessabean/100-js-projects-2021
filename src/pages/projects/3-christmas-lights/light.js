import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./christmas-lights.css";
import { HexColorPicker } from "react-colorful";
import classNames from 'classnames/bind';

function Light({animated}) {
  const [color, setColor] = useState('#fffff');
  const [showPicker, setPicker] = useState(false);
  const [isAnimated, setIsAnimated] = useState(animated);
  const clickListener = useRef();

  const handleColorChange = (color) => {
    setColor(color);
  }

  const togglePicker = (event) => {
    setIsAnimated(false);
    if (showPicker === true) {
      setPicker(false);
    } else {
      setPicker(true);
    }
  }

  const handleKeyPress = (event) => {
    if(event.keyCode === 27) {
      setPicker(false);
      setIsAnimated(false);
    }
  }

  const handleClickOutside = (event) => {
    if (clickListener.current.contains(event.target)) {
      return;
    }
    setPicker(false);
  };

  const assignAnimation = () => {
    const speed = Math.floor(Math.random() * 4);
    return speed.toString();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    setIsAnimated(animated);
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

  const cx = classNames.bind(styles);

  let lightClasses = cx(
    'light',
    `light--animated${assignAnimation()}`,
    {
      'light--animated' : isAnimated
    }
  );

  return (
  <>
    <div className="light__wrapper">
      {!!showPicker &&
        <div ref={clickListener}>
          <div className={'light__picker'}>
            <HexColorPicker color={color} onChange={handleColorChange} />
          </div>
        </div>
      }
      <button className={lightClasses} style={{ background: color }} onClick={togglePicker}></button>
    </div>
  </>
  )
}

export default Light;

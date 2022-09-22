import { useState, useEffect } from 'react';
import './Pad.scss';

function Pad({ color, currentTurn, currentColorClickedBySimon, userClickedPad }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  // const defaultClassName = currentColorClickedBySimon === color ? `pad ${color} clicked` : `pad ${color}`;
  // const [className, setClassName] = useState(defaultClassName);
  const className = currentColorClickedBySimon === color ? `pad ${color} clicked` : `pad ${color}`;
  // useEffect(() => {
  //   if (isMouseDown) {
  //     setClassName(`${className} clicked`)
  //   } else {
  //     setClassName(className.replace(' clicked', ''))
  //   }
  // }, [isMouseDown]);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleClick = () => {
    if (currentTurn !== 'user') {
      return;
    }
    userClickedPad(color);
  };

  return (
    <div
      className={className}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >

    </div>
  );
}

export default Pad;

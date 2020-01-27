import React, { useState, useEffect } from "react";

import CardEllipsis from "./CardElipsis";
import AddCardButton from "./AddCardButton";
import { cont, selectedImgStyle, imgStyle, scaleY, scaleX } from '../../shared/constants';

const SelectedImage = ({photo, margin, direction, top, left, selected}) => {
  const [isSelected, setIsSelected] = useState(selected);

  //calculate x,y scale
  selectedImgStyle.transform = `translateZ(0px) scale3d(${scaleX(photo.width)}, ${scaleY(photo.height)}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const handleOnClick = e => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div style={{margin, ...cont}} className={!isSelected ? "not-selected" : ""}>
      <CardEllipsis selected={isSelected ? true : false} options={[<AddCardButton card={photo}/>]}/>
      <img
        alt={photo.title}
        style={isSelected ? {...imgStyle, ...selectedImgStyle} : {...imgStyle}}
        src={photo.imageUrl}
        {...photo}
        onClick={handleOnClick}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default SelectedImage;

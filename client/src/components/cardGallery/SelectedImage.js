import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cardSearchDeselect, cardSearchSelect } from "../../actions";
import CardHighlight from "./CardHighlight";
import { cont, selectedImgStyle, imgStyle, scaleY, scaleX } from '../shared/constants';

const SelectedImage = ({photo, margin, direction, top, left, selected}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth._id);

  //calculate x,y scale
  selectedImgStyle.transform = `translateZ(0px) scale3d(${scaleX(photo.width)}, ${scaleY(photo.height)}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const select = () => {
    setIsSelected(true)
  };

  const deselect = () => {
    setIsSelected(false)
  };

  const handleOnClick = () => {
    if (isSelected) {
      deselect();
      dispatch(cardSearchDeselect(photo))
    } else {
      select();
      dispatch(cardSearchSelect({...photo, user: currentUserId}))
    }
  };

  return (
    <div style={{margin, ...cont}} className={!isSelected ? "not-selected" : ""}>
      <CardHighlight selected={isSelected ? true : false}/>
      <img
        alt={photo.title}
        style={isSelected ? {...imgStyle, ...selectedImgStyle} : {...imgStyle}}
        src={photo.imageUrl}
        {...photo}
        onClick={() => handleOnClick()}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default SelectedImage;

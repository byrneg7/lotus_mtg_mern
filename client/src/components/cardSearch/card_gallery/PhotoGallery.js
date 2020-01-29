import React, { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage";

const PhotoGallery = (props) => {
  const [selectAll] = useState(false);

  const imageRenderer = useCallback(
    (props) => (
      <SelectedImage {...props} />
    ),
    [selectAll]
  );

  return (
    <div>
      <Gallery photos={props.cards.filter(card => card.src)} renderImage={imageRenderer} />
    </div>
  );
};

export default PhotoGallery;

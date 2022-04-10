import React from "react";

const Image = ({ src }) => {
  return (
    <div>
      <img src={src} alt={src} />
    </div>
  );
};

export default Image;

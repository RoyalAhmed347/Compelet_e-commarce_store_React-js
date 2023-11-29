import React, { useState } from "react";

const Product_imgs = ({ id, thumbnail, images = [""] }) => {
  const [mainImg, setmainImg] = useState(thumbnail);
  const [imgIndex, setimgIndex] = useState(images.length);
  return (
    <>
      <div className="all_imgs">
        {images.map((elem, index) => {
          return (
            <img
              key={index}
              src={elem}
              alt={id}
              onClick={() => {
                setmainImg(elem);
                setimgIndex(index);
              }}
            />
          );
        })}
        <img
          src={thumbnail}
          alt={id}
          onClick={() => {
            setmainImg(thumbnail);
            setimgIndex(images.length);
          }}
        />
        ;
      </div>
      <div className="main_img">
        <img src={mainImg} alt="mainImag" />
        <p className="text">
          {images.length + 1} of {imgIndex + 1}
        </p>
      </div>
    </>
  );
};

export default Product_imgs;

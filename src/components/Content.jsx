import React from "react";
import ImageOne from "../images/image1.webp";
import ImageTwo from "../images/image2.webp";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, delicius, and nutritious</p>
          <span>$16</span>
        </div>
      </div>

      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, delicius, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
    </>
  );
};

export default Content;

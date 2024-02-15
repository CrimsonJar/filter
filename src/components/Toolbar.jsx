import React, { useState } from "react";
import "./Toolbar.css";

const Toolbar = ({ onCategoryChange }) => {
  const [activeButton, setActiveButton] = useState("All");
  // ["All", "Websites", "Flayers", "Business Cards"]
  const handleButtonClick = (button) => {
    setActiveButton(button);
    onCategoryChange(button);
  };

  return (
    <>
      <div>
        <button
          className={
            activeButton === "All"
              ? "btn btn-active btn-neutral"
              : "btn btn-outline"
          }
          onClick={() => handleButtonClick("All")}
        >
          All
        </button>
        <button
          className={
            activeButton === "Websites"
              ? "btn btn-active btn-neutral"
              : "btn btn-outline"
          }
          onClick={() => handleButtonClick("Websites")}
        >
          Websites
        </button>
        <button
          className={
            activeButton === "Flayers"
              ? "btn btn-active btn-neutral"
              : "btn btn-outline"
          }
          onClick={() => handleButtonClick("Flayers")}
        >
          Flayers
        </button>
        <button
          className={
            activeButton === "Business Cards"
              ? "btn btn-active btn-neutral"
              : "btn btn-outline"
          }
          onClick={() => handleButtonClick("Business Cards")}
        >
          Business Cards
        </button>
      </div>
    </>
  );
};

export default Toolbar;

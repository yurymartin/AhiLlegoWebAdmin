import React from "react";
import PropTypes from "prop-types";

const LoaderOverlay = (props) => {
  return (
    <div className="absolute bg-gray-300 min-h-full min-w-full">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam enim
        et. Unde nulla dolor reprehenderit a, ullam eius vero, minima atque
        mollitia, eaque quo error non quae libero officiis.
      </p>
    </div>
  );
};

LoaderOverlay.propTypes = {};

export default LoaderOverlay;

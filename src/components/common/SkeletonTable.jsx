import React from "react";
import PropTypes from "prop-types";

const SkeletonTable = (props) => {
  return (
    <>
      {props.isOpen && (
        <div role="status" class="w-full animate-pulse">
          <br />
          <div class="h-10 rounded-md bg-gray-300 mb-2.5"></div>
          <div class="h-10 rounded-md bg-gray-300 mb-2.5"></div>
          {/* <div class="h-10 rounded-md bg-gray-300 mb-2.5"></div>
          <div class="h-10 rounded-md bg-gray-300 mb-2.5"></div>
          <div class="h-10 rounded-md bg-gray-300 mb-2.5"></div> */}
        </div>
      )}
    </>
  );
};

SkeletonTable.defaultProps = {
  isOpen: false,
};

SkeletonTable.propTypes = {
  isOpen: PropTypes.bool,
};

export default SkeletonTable;

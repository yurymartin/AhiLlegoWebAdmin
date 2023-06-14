import React from "react";
import PropTypes from "prop-types";
import LoaderSpinner from "./LoaderSpinner";

const ButtonSubmit = (props) => {
  return (
    <button
      type="submit"
      disabled={props.isLoading}
      className={`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-500 ${props.style} `}
    >
      {props.isLoading ? <LoaderSpinner isOpen={true} /> : props.label}
    </button>
  );
};

ButtonSubmit.defaultProps = {
  label: "ENVIAR",
  style: "",
  isLoading: false,
};

ButtonSubmit.propTypes = {
  label: PropTypes.string,
  style: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default ButtonSubmit;

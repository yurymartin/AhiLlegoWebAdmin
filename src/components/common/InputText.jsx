import React from "react";
import PropTypes from "prop-types";

const InputText = (props) => {
  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <label for="first_name" class="block mb-2 text-sm font-medium text-white">
        {props.label}
      </label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        placeholder={props.placeholder}
        required={props.required}
        onChange={onChange}
      />
    </div>
  );
};

InputText.defaultProps = {
  id: "inputText",
  name: "inputText",
  label: "",
  placeholder: "",
  required: false,
  onChange: () => {},
};

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputText;

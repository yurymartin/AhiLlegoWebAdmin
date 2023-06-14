import React from "react";
import PropTypes from "prop-types";

const InputSelect = (props) => {
  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <label
        for="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <select
        id={props.id}
        name={props.name}
        value={props.value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        onChange={onChange}
      >
        <option value={""} selected>
          {props.placeholder}
        </option>
        {props.options.map((item, index) => (
          <option key={index} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.defaultProps = {
  id: "inputselect",
  name: "inputText",
  label: "",
  options: [],
  placeholder: "seleccionar",
  value: "",
  onChange: () => {},
};

InputSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputSelect;

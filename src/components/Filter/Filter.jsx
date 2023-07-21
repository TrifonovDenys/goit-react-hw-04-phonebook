import React from "react";
import { nanoid } from 'nanoid'
import css from './Filter.module.css'
import PropTypes from "prop-types";

const Filter = ({ filterValue, onChange }) => {
  const filterInputId = nanoid();

  return (
    <div className={css.filter}>
      <label className={css.lable} htmlFor={filterInputId}>find contacts by name</label>
      <input
        type="text"
        value={filterValue}
        id={filterInputId}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;


Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

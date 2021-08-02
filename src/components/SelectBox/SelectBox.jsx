import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SelectBox(props) {
  const [fieldList, setFieldList] = useState([
    { value: 'id', fieldName: 'Id' },
    { value: 'firstName', fieldName: 'First Name' },
    { value: 'lastName', fieldName: 'Last Name' },
    { value: 'email', fieldName: 'Email' },
    { value: 'birthday', fieldName: 'Birthday' },
    { value: 'salary', fieldName: 'Salary' },
  ]);
  const { onChangeSelect } = props;

  function changeSelect(e) {
    const selectedField = e.target.value;

    if (onChangeSelect) {
      onChangeSelect(selectedField);
    }
  }

  return (
    <div>
      <select defaultValue={'DEFAULT'} onChange={changeSelect}>
        <option value="DEFAULT" disabled>
          Select field to sort
        </option>
        {fieldList.map((field) => (
          <option key={field.value} value={field.value}>
            {field.fieldName}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectBox.propTypes = {
  onChangeSelect: PropTypes.func,
};

SelectBox.defaultProps = {
  onChangeSelect: null,
};

export default SelectBox;

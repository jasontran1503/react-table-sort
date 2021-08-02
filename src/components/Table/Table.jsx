import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

function Table(props) {
  const { users } = props;

  function transformPhoneNumber(phoneNumber) {
    return '(+84)' + phoneNumber.replace(/-/g, '');
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Birthday</th>
          <th>Salary</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.birthday}</td>
              <td>{user.salary}</td>
              <td>{transformPhoneNumber(user.phone)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.array,
};

Table.defaultProps = {
  users: [],
};

export default Table;

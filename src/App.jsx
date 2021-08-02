import React, { useState } from 'react';
import './App.css';
import SelectBox from './components/SelectBox/SelectBox';
import Table from './components/Table/Table';
import useSort from './hooks/useSort/useSort';

function App() {
  const [users, setUsers] = useState([
    {
      id: 2,
      firstName: 'Rosalynd',
      lastName: 'Gerrelts',
      email: 'rgerrelts1@weibo.com',
      gender: 'Female',
      birthday: '1964-03-31T16:24:27Z',
      salary: 8951,
      phone: '142-282-1117',
    },
    {
      id: 3,
      firstName: 'Khalil',
      lastName: 'Joppich',
      email: 'kjoppich2@marketwatch.com',
      gender: 'Male',
      birthday: '1987-06-30T01:55:33Z',
      salary: 7627,
      phone: '207-413-0416',
    },
    {
      id: 4,
      firstName: 'Eric',
      lastName: 'Cobbled',
      email: 'ecobbled3@last.fm',
      gender: 'Male',
      birthday: '1989-11-06T10:39:32Z',
      salary: 6994,
      phone: '829-513-8650',
    },

    {
      id: 51,
      firstName: 'Rozalie',
      lastName: 'Ault',
      email: 'rault1e@zimbio.com',
      gender: 'Female',
      birthday: '1994-09-14T01:14:59Z',
      salary: 5821,
      phone: '504-646-6711',
    },
    {
      id: 52,
      firstName: 'Zenia',
      lastName: 'Melsom',
      email: 'zmelsom1f@is.gd',
      gender: 'Female',
      birthday: '1960-07-11T20:58:00Z',
      salary: 5775,
      phone: '264-781-7240',
    },
    {
      id: 53,
      firstName: 'Beale',
      lastName: "O'Luney",
      email: 'boluney1g@baidu.com',
      gender: 'Male',
      birthday: '1961-11-19T08:44:36Z',
      salary: 7866,
      phone: '510-698-5757',
    },
    {
      id: 54,
      firstName: 'Maggi',
      lastName: 'Doxsey',
      email: 'mdoxsey1h@cisco.com',
      gender: 'Female',
      birthday: '1977-07-10T23:31:52Z',
      salary: 7092,
      phone: '398-859-7041',
    },

    {
      id: 98,
      firstName: 'Claudio',
      lastName: 'Liles',
      email: 'cliles2p@yahoo.co.jp',
      gender: 'Male',
      birthday: '1983-07-20T00:52:22Z',
      salary: 6136,
      phone: '913-494-8369',
    },
    {
      id: 99,
      firstName: 'Clarette',
      lastName: 'Carncross',
      email: 'ccarncross2q@go.com',
      gender: 'Female',
      birthday: '1985-10-05T05:31:17Z',
      salary: 9033,
      phone: '469-572-7849',
    },
    {
      id: 100,
      firstName: 'Torre',
      lastName: 'Doppler',
      email: 'tdoppler2r@yolasite.com',
      gender: 'Male',
      birthday: '1998-05-17T10:20:30Z',
      salary: 6924,
      phone: '766-973-5223',
    },
  ]);

  function handleChangeSelect(selectedField) {
    const newUsers = useSort([...users], selectedField);
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <SelectBox onChangeSelect={handleChangeSelect}></SelectBox>
      <Table users={users}></Table>
    </div>
  );
}

export default App;

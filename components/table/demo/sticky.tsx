import React, { useState } from 'react';
import { Switch, Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },

  
];

const data: DataType[] = [];

const App: React.FC = () => {
  const [fixedTop, setFixedTop] = useState(false);

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500 }}
      // antd site header height
      sticky={{ offsetHeader: 64 }}
    />
  );
};

export default App;

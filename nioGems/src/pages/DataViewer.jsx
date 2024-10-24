import React, { useState } from 'react';
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-table";
import "@esri/calcite-components/dist/components/calcite-table-header";
import "@esri/calcite-components/dist/components/calcite-table-row";
import "@esri/calcite-components/dist/components/calcite-table-cell";

import {
  CalcitePanel,
  CalciteInput,
  CalciteTable,
  CalciteTableHeader,
  CalciteTableRow,
  CalciteTableCell,
} from "@esri/calcite-components-react";

const DataViewer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  // Sample data - replace this with your actual data source
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
    { id: 4, name: 'Alice Brown', age: 28, city: 'Houston' },
  ]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <CalcitePanel heading="Data Viewer">
      <CalciteInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onInput={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '10px 0' }}
      />

      <CalciteTable>
        <CalciteTableHeader>
          <CalciteTableRow>
            <CalciteTableCell onClick={() => handleSort('id')}>
              ID {sortColumn === 'id' && (sortDirection === 'asc' ? '▲' : '▼')}
            </CalciteTableCell>
            <CalciteTableCell onClick={() => handleSort('name')}>
              Name {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}
            </CalciteTableCell>
            <CalciteTableCell onClick={() => handleSort('age')}>
              Age {sortColumn === 'age' && (sortDirection === 'asc' ? '▲' : '▼')}
            </CalciteTableCell>
            <CalciteTableCell onClick={() => handleSort('city')}>
              City {sortColumn === 'city' && (sortDirection === 'asc' ? '▲' : '▼')}
            </CalciteTableCell>
          </CalciteTableRow>
        </CalciteTableHeader>
        <tbody>
          {filteredData.map((item) => (
            <CalciteTableRow key={item.id}>
              <CalciteTableCell>{item.id}</CalciteTableCell>
              <CalciteTableCell>{item.name}</CalciteTableCell>
              <CalciteTableCell>{item.age}</CalciteTableCell>
              <CalciteTableCell>{item.city}</CalciteTableCell>
            </CalciteTableRow>
          ))}
        </tbody>
      </CalciteTable>
    </CalcitePanel>
  );
};

export default DataViewer;

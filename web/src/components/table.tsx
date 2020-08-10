import React from 'react';
import Tr from './_tr';
import { useUsers } from '../../hooks/useUsers';

const Table = () => {
  const { data } = useUsers();

  if (!data) return <div className="table-scroll">...Loading</div>;
  return <div className="table-scroll">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>CONDO NAME</th>
        <th>RENT PRICE (Baht)</th>
        <th>SELL PRICE (Baht)</th>
        <th>BEDROOM</th>
        <th>BATHROOM</th>
        <th>SIZE (sqm.)</th>
        <th>FLOOR</th>
        <th>STATUS</th>
        <th>PHOTO</th>
        <th>TITLE</th>
        <th>DESCRIPTION</th>
        <th>BENEFIT</th>
        <th>Amenities</th>
      </tr>
    </thead>
    <tbody>
      {
        data.data.map((item, key) => (
          <Tr key={key} data={item} num={key+1} />
        ))
      }
    </tbody>
  </table>
</div>
}

export default Table;
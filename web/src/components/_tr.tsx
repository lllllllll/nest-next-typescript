import React from 'react';
import Dropdown from './dropdown';

const photo = 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e';
const benifit = {
  value: 'ห้องใหม่เอี่ยม',
  title: 'Benifit',
  list: [
    {
      label: 'Air condition',
      value: '1',
    },
    {
      label: 'Balcony',
      value: '2',
    },
    {
      label: 'Bath tub',
      value: '3',
    },
    {
      label: 'Electric stove',
      value: '4',
    },
    {
      label: 'Furniture',
      value: '5',
    },
    {
      label: 'Waching Machine',
      value: '6',
    },
  ],
  cb: item => console.log('DDD > ', item),
}
const amenities = {
  value: '4',
  title: 'Amenities',
  list: [
    {
      label: 'Air condition',
      value: '1',
    },
    {
      label: 'Balcony',
      value: '2',
    },
    {
      label: 'Bath tub',
      value: '3',
    },
    {
      label: 'Electric stove',
      value: '4',
    },
    {
      label: 'Furniture',
      value: '5',
    },
    {
      label: 'Waching Machine',
      value: '6',
    },
  ],
  cb: item => console.log('DDD > ', item),
}
// Refrigerator: true
// accept_agent: true
// agent_post: true
// aircon: true
// bath: 1
// bath_tub: true
// bedroom: 1
// condo_name: "1"
// createdDate: "2020-08-08T09:01:56.426Z"
// description: "1"
// electric_stove: true
// floor: 1
// furniture: true
// gas_stove: true
// photos: "1"
// rent_price: 1
// sale_price: 1
// size: 1
// title: "1"
// updatedDate: "2020-08-08T09:01:56.426Z"
// washing_machine: true
// water_heater: true

const Td = (data: string, txt?: any) => {
  if (txt) {
    return <td className={data ? '' : '_not-found'}>
      {data ? data : 'Not found'}{data ? txt : null}
    </td>;
  }

  return <td className={data ? '' : '_not-found'}>{data ? data : 'Not found'}</td>;
}
const TdPhotos = (data: any[]) => {
  return <td className={data ? '' : '_not-found'}>
    {data.map((item, key) => (
      <div key={key} className="photo">
        <img src={photo} alt=""/>
      </div>
    ))}
  </td>;
}

const Tr = ({data, num}) => {
  return <tr>
  <td>
    <div className="item">{num}</div>
  </td>
  {Td(data.condo_name)}
  {Td(data.rent_price, <small>/Month</small>)}
  {Td(data.sale_price)}
  {Td(data.bedroom)}
  {Td(data.bath)}
  {Td(data.size)}
  {Td(data.floor)}
  <td>
    <div className="status">Agent post</div>
    <div className="status _winning">รับ Co-Agent</div>
  </td>
  {/* {Td(data.photos)} */}
  {TdPhotos([1, 2])}
  {Td(data.title)}
  {Td(data.description)}
  <td><Dropdown data={benifit} /></td>
  <td><Dropdown data={amenities} /></td>
</tr>
}

export default Tr;
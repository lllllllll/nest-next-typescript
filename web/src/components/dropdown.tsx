import React, { useState, useRef } from 'react';


const Dropdown = () => {
  const refDropdown = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [tranX, setTranX] = useState(0);

  const getOffset = e => {
    const rect = refDropdown.current.getBoundingClientRect();
    setTranX(rect.right);
    setIsOpen(!isOpen)
  }
  return <div ref={refDropdown} className="dropdown" onClick={getOffset}>
  <div className="header">
    <div className="title">ห้องใหม่เอี่ยม</div>
    <div className="icon"><i className="fas fa-caret-down"/></div>
  </div>
  { isOpen ?
    <div className="dropdown-items" style={{transform: `translateX(${tranX}px)`}}>
      <div className="title">Amenities</div>
      <div className="item">Air condition</div>
      <div className="item">Balcony</div>
      <div className="item">Bath tub</div>
      <div className="item">Electric stove</div>
      <div className="item">Furniture</div>
      <div className="item">Waching Machine</div>
    </div> : null
  }
</div>
}

export default Dropdown;
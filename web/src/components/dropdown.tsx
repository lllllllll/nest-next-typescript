import React, { useState, useRef } from 'react';
import { ListenerClick } from './_listenerClick';

const Dropdown = ({data: {value, title, list, cb}}) => {
  const refDropdown = useRef(null);
  const [isActive, setIsActive] = ListenerClick(refDropdown, false);
  const [tranX, setTranX] = useState(0);

  const getOffset = () => {
    const rect = refDropdown.current.getBoundingClientRect();
    setTranX(rect.right);
    setIsActive(!isActive);
  }
  const send = item => {
    cb(item);
  }

  return <div ref={refDropdown} className="dropdown" onClick={getOffset}>
  <div className="header">
    <div className="title">{ value }</div>
    <div className="icon"><i className="fas fa-caret-down"/></div>
  </div>
  { isActive ?
    <div className="dropdown-items" style={{transform: `translateX(${tranX}px)`}}>
      { title ? <div className="title">{ title }</div> : null }
      {
        list.map((item, key) => (
          <div key={key} onClick={() => send(item)} className="item">{item.label}</div>
        ))
      }
    </div> : null
  }
</div>
}

export default Dropdown;
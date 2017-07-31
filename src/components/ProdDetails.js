import React from 'react';

const ProdDetails = (props) => {
let item=props.item;
let stle= {'display':'none'}
  return <div className="prod-details">
    <div>
      <ul>
        <li>{item.p_name.toUpperCase()}</li>
        <li>Style #:{item.p_style.toUpperCase()}</li>
        <li>Colour:{item.p_selected_color.name.toUpperCase()}</li>
        <li style={stle} className="li-size">Size:{item.p_selected_size.code.toUpperCase()}</li>
        <li style={stle} className="li-qty">QTY:<input value={item.p_quantity} disabled></input></li>
      </ul>
    </div>
  </div>
}


export default ProdDetails;

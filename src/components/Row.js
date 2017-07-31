import React from 'react';
import ProdDetails from './ProdDetails'

const Price = ({item}) => {
  return <div>
    {item.p_originalprice !== parseInt(item.p_price/item.p_quantity)?<span className='actual-price'><sup>$</sup>{item.p_originalprice.toFixed(2)}</span>:''}
    <br/>
    <span><sup>$</sup>{item.p_price.toFixed(2)}</span>
  </div>
}


const Row = (props) => {
let item=props.item;
let src= '../../images/T'+item.p_id+'.jpg';
  return <div className="row">
      <div className='prod-img'><img src={src}/></div>
      <div className="row-wrap">
      <div className="details-wrap">
          <section><ProdDetails item={item} editProdDetails={props.editProdDetails}/></section>
          <section className="row-right-section">
            <div className="size">{item.p_selected_size.code.toUpperCase()}</div>
            <div className="quantity"><div><input data-id={item.p_id} value={item.p_quantity}></input></div></div>
            <div className="price"><Price item={item}/></div>
          </section>
          </div>&nbsp; &nbsp;
      <div className="prod-update"><a onClick={() => {props.editProdDetails(item)}}>EDIT</a>&nbsp;&nbsp;| &nbsp; &nbsp;<a>REMOVE</a>&nbsp; &nbsp;|&nbsp; &nbsp;<a>SAVE FOR LATER</a></div>
      </div>
  </div>
}


export default Row;

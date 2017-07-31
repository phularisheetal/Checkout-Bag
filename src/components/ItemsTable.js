import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadtItems,updatePrice} from '../actions/index';
import Row from './Row.js';
import Modal from './Modal.js';


class ItemsTable extends Component {
  constructor(props) {
    super(props);
    this.state={
      showModal:false,
      editItem:{}
    }
    this.editProdDetails = this.editProdDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }


  closeModal() {
    this.setState({showModal:false})
  }
  editProdDetails(item) {
    this.setState({editItem:item,showModal:true})
  }

  render(){
    let rows = this.props.items.map((item,key) => {
        return <Row item={item} editProdDetails={this.editProdDetails}/>
    })
    let itemsLength = this.props.items.length+' ITEMS';
    return (
      <div className="items-table">
      <header>YOUR SHOPPING BAG<span className="length">{itemsLength}</span></header>
        <table>
        <thead>
          <tr>
            <th>{this.props.items.length}ITEMS</th>
            <th></th>
            <th>SIZE</th>
            <th>QTY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
        <div className="grid">
          {rows}
        </div>
      {this.state.showModal?<Modal item={this.state.editItem} closeModal={this.closeModal}/>:''}
      </div>
    );
  }

  componentDidMount() {
    this.props.loadtItems();
  }
}


function mapStateToProps(state) {
 return {items:state.items}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({loadtItems:loadtItems,updatePrice:updatePrice},dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(ItemsTable)

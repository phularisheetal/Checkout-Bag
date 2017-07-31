import React, { Component } from 'react';
import ItemsTable from './ItemsTable';
import BagFooter from './BagFooter';


export default class CartPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <ItemsTable />
        <BagFooter />
      </div>
    );
  }

  componentDidMount() {

  }
}

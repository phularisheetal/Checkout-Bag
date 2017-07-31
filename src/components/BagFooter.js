import React, { Component } from 'react';
import PromoDiscount from './PromoDiscount';

export default class BagFooter extends Component {
  render() {
    return (
      <div className="items-footer">
      <aside>
        <p>Need help or have questions?</p>
        <p>Call Customer Service at 1-800-555-5555</p>
        <p>Chat with one of our sttylists</p>
        <p>See return and exchange policy</p>
      </aside>
      <PromoDiscount />
      </div>
    );
  }

  componentDidMount() {

  }
}

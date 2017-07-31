import React, { Component } from 'react';

export default class PromoDiscount extends Component {
  render() {
    return (
      <div className="promo-items-footer">
        <ul className="total-price-details">
          <li>
            <section>
              <label>ENTER PROMOTION CODE OR GIFT CARD</label>
              <section>
                <input />
                <button>APPLY</button>
              </section>
            </section>
          </li>
          <li>
            <section>
              <span className="left">SUBTOTAL</span>
              <span className="right"><sup>$</sup>37.00</span>
            </section>
          </li>
          <li>
          <section>
            <span className="left">PROMOTION CODE <b>JF10</b> APPLIED</span>
            <span className="right">-<sup>$</sup>7.00</span>
          </section>
          </li>
          <li>
          <section>
            <div className="left">
              <span className='shipping'>ESTIMATED SHIPPING*</span><br/>
                <span>You qualify for free shipping because your order is over $50*</span>
            </div>
            <span className="right">FREE</span>
          </section>
          </li>
          <li>
          <section>
            <div className="left">
              <span>ESTIMATED TOTAL</span><br/>
                <span>Tax will be applied during checkout</span>
            </div>
            <span className="right"><sup>$</sup>37.00</span>
          </section>
          </li>
          <li>
            <section className="right">
              <a>CONTINUE SHOPPING</a>
              <button>CHECKOUT</button>
            </section>
          </li>
          <li className="right"><img src="../../images/lock.jpg"/>Secure checkout.Shopping is always safe & secure</li>
          <li><a>SIGN IN</a>&nbsp;to have your cart and have access to your items on mobile,tablet and desktop.</li>

        </ul>
      </div>
    );
  }

  componentDidMount() {

  }
}

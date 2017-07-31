import React, { Component } from 'react';

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.setProperties = this.setProperties.bind(this);
    this.getDropOpts = this.getDropOpts.bind(this)
  }
  setProperties (e) {
  this.props.setProperties(e,this.props.type);
  }

  getDropOpts(){
    let list = [];
    let item = this.props.item;
    let text = this.props.type == 'SIZE'?'SIZE':'QTY:'+item.p_quantity;

    list.push(<option value="" disabled selected style={{'display':'none'}}>{text}<span>˅</span></option>);
    if(this.props.type == 'SIZE') {
      let sizes = item.p_available_options.sizes;
      let tempList = sizes.map((size,key) => {
        let cls = this.props.selectedSize.code == size.code?'selected':''
        return <option className={cls} value={size.code.toUpperCase()}>{size.code.toUpperCase()}{item.p_selected_size.code == size.code?<span className="tick">✔</span>:''}</option>
      })
      list  = [...list,...tempList];
    }else {
        for(let i= 1;i <= 10;i++) {
          let cls = this.props.selectedQty == i ?'selected':''
          list.push(<option className={cls} value={i}>{i}{parseInt(item.p_quantity) == i?<span className="tick">✔</span>:''}</option>);
        }
    }
    return list;
  }
  render() {
    let options = this.getDropOpts();
    let cls = "options";
    return (
      <div className="dropdown">
        <select className={this.props.type} onChange={this.setProperties}>
        {options}
        </select>

      </div>
    );
  }

  componentDidMount() {

  }
}

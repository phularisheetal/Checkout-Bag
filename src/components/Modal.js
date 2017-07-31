import React, { Component } from 'react';
import DropDown from './DropDown';
import {editBag} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Modal extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedSize:this.props.item.p_selected_size,
      selectedQty:this.props.item.p_quantity,
      selectedColor:this.props.item.p_selected_color,

    }
    this.closeModal = this.closeModal.bind(this);
    this.setProperties= this.setProperties.bind(this);
    this.setColor = this.setColor.bind(this);
    this.getColors = this.getColors.bind(this);
    this.edit = this.edit.bind(this);
  }

  setColor(e) {
    let clr = this.props.item.p_available_options.colors.filter((item,key) => {
        return item.hexcode == e.target.getAttribute('data-color')
    })
    this.setState({selectedColor:clr[0]});
  }

  closeModal (event){
    if(event.target.className == 'edit-modal' || event.target.className == 'close-modal') {
      this.props.closeModal();
    }
  }


  setProperties (e,type) {
    if(type == 'SIZE') {
      let sze = this.props.item.p_available_options.sizes.filter((item,key) => {
          return item.code == e.target.value.toLowerCase()
      })
      this.setState({selectedSize:sze[0]})
    }else {
      this.setState({selectedQty:parseInt(e.target.value)})

    }
  }

  getColors() {
    let itemAct = this.props.item;
    let colors = itemAct.p_available_options.colors.map((color,key)=>{
      let stle={
        'padding':'10px 10px',
        'border':color.name == this.state.selectedColor.name?'solid 2px grey':'solid 2px white',
        'backgroundColor':color.hexcode
      }
      return <span style={stle} data-color={color.hexcode} onClick={this.setColor}></span>
    })
    return colors;
  }

  edit(){
    debugger;
    let selectedSize = this.props.item.p_selected_size.code;
    let selectedQty=this.props.item.p_quantity;
    let selectedColor=this.props.item.p_selected_color.hexcode;
    if(selectedSize != this.state.selectedSize.code || selectedQty != this.state.selectedQty
       || selectedColor != this.state.selectedColor.hexcode ){
      this.props.editBag(this.props.item.p_id,this.state);
    }
    this.props.closeModal();
  }

  render() {
    let src= '../../images/T'+this.props.item.p_id+'.jpg';
    let item = this.props.item;
    let Colors=this.getColors()

    return (
      <div className="edit-modal" onClick={this.closeModal}>
          <div className="wrapper">
            <p className="close-modal" onClick={this.closeModal}>X</p>
            <article className="sections">
              <section className="det-cont">
                <ul className="prod-det-list">
                  <li>{item.p_name.toUpperCase()}</li>
                  <li className="price"><sup>$</sup>{item.p_price}</li>
                  <li><p>Colors:</p><div className="colors">{Colors}</div></li>
                  <li className='size-qty'>
                    <DropDown type='SIZE' item={item} setProperties={this.setProperties} selectedSize={this.state.selectedSize}/>
                    <DropDown type='QTY' item={item} setProperties={this.setProperties} selectedQty={this.state.selectedQty}/>
                  </li>
                  <li className="editButton" onClick={this.edit}><a>EDIT</a></li>
                  <li><a>See product details</a></li>
                </ul>
              </section>
              <section className="img-cont">
                <img src={src}/>
              </section>
            </article>
          </div>
      </div>
    );
  }

  componentDidMount() {

  }
}



function mapStateToProps(state) {
 return {items:state.items}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({editBag},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Modal)

import React, { Component } from 'react';
 
class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:this.props.value
    };
  
  }

  
  value=()=>{
    if(this.props.value==="true") return "kich hoat"
    if(this.props.value==="false") return "an"
  }
  colorStatus=()=>{
    if(this.props.value==="true"){
      return "button label-danger"
      
    }
    if(this.props.value==="false"){
      return "button btn-hide"

    }
  }
  editClick=()=>{
    this.props.editFunClick();

    this.props.editclickbtn();
  }
  deleteButtonClick=(idUser)=>{
    
    this.props.deleteButtonClick(idUser);
  }
  // changeStatus=(id)=>{
  //   this.props.changeStatus(id); 
  //   // if(this.state.value==="true"){
  //   //   this.setState({value:"false"})
      
  //   // }
  //   // if(this.state.value==="false"){
  //   //   this.setState({value:"true"})
  //   // }
   
  // }
  
    render() { 
   
      
        return (
            <tr>
        <th className="column ">{this.props.stt +1}</th>
        <th className="column column-name">{this.props.userName}</th>
        <th><button className={this.colorStatus()} id="status" onClick={()=>this.props.changeStatus(this.props.id)} >{this.value()}</button></th>
        <th>
          <button type="reset" className="button btn-edit" onClick={(id)=>this.editClick(id)}><i className="fad fa-edit" /> Sua</button>
          <button className="button btn-delete" onClick={(idUser)=>this.deleteButtonClick(this.props.id)}><i className="fas fa-trash-alt" /> Xoa</button>
        </th>
      </tr>
        );
    }
}
 
export default Row;
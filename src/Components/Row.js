import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
    
    // this.props.deleteButtonClick(idUser);
    confirmAlert({
      title: 'Xoa cong viec',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.deleteButtonClick(idUser)
        },
        {
          label: 'No',
          
        }
      ]
    });
  }
 
  
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
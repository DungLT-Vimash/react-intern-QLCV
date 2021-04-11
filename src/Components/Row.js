import React, { Component } from 'react';
 
class Row extends Component {
  value=()=>{
    if(this.props.value==="1"){return "Kich Hoat"}
    else {return "An"}
    
  }
  editClick=()=>{
    this.props.editFunClick();

    this.props.editclickbtn();
  }
  deleteButtonClick=(idUser)=>{
    
    this.props.deleteButtonClick(idUser);
  }
    render() { 
       console.log(this.props.value)
        return (
            <tr>
        <th className="column">{this.props.stt +1}</th>
        <th className="column column-name">{this.props.userName}</th>
        <th><button className="button btn-hide" >{this.value()}</button></th>
        <th>
          <button type="reset" className="button btn-edit" onClick={()=>this.editClick()}><i className="fad fa-edit" /> Sua</button>
          <button className="button btn-delete" onClick={(idUser)=>this.deleteButtonClick(this.props.id)}><i className="fas fa-trash-alt" /> Xoa</button>
        </th>
      </tr>
        );
    }
}
 
export default Row;
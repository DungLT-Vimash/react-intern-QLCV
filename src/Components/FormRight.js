import React, { Component } from 'react';
import "react-toggle/style.css";
import Row from './Row';

class FormRight extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showForm:false,
        tempValue:'',
        isActive: false,
        editClick:false,

      };
    }
    mappingDataUser=()=> {
      if(this.props.dataUserProps!==null){
        return (
          this.props.dataUserProps.map((value,key) => (
        
            <Row
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            
         
            editFunClick={(user) => this.props.editFun(value)} 
            userName={value.name}
             key={key} 
            stt={key} 
            
            value={value.value}
            id={value.id}
            editclickbtn={this.props.editclickbtn}
            />))
        )
      }
    }
         
    isChange=(event)=>{

      this.setState({
        tempValue:event.target.value
      })
      this.props.getTextSearch(this.state.tempValue);
    }

    
    
    handleToggle = () => {
      this.setState({ isActive: !this.state.isActive });
    };
  
    deleteButtonClick=(idUser)=>{
      this.props.deleteUser(idUser);
    }
    render() { 

      // const isActive = this.state.isActive;
     
        return (
            <div className="div-right">
  <div><button className="button btnadd" onClick={this.props.onchangeform}><i className="far fa-plus" /> Them Cong Viec</button></div>
  <div>
    <input type="text"   onChange={(event)=>this.isChange(event)}/>
    <button className="button btnadd"><i className="far fa-search"  onClick={(dl)=>this.props.getTextSearch(this.state.tempValue)}/> tim</button>
    <div className="btnsort">
  <button className="button btnadd " onClick={this.handleToggle}>sap xep <i className="fad fa-caret-square-down " /></button>
  <div  className={this.state.isActive ? "sort-list" : "sort"} id="sort">

    <div><i className="fas fa-sort-alpha-down" /> Tên A-Z</div>
    <div><i className="fas fa-sort-alpha-down-alt" /> Tên Z-A</div>
    <hr />
    <div>Trang thai kich hoat</div>
    <div>Trang thai an</div>
  </div>
</div>
  </div>
  <div>
  <table >
    <tbody><tr>
        <th>STT</th>
        <th >Ten</th>
        <th>Trang Thai</th>
        <th>Hanh Dong</th>
      </tr>
      <tr>
        <td />
        <td />
        <td>
          <select className="trangthai">
            <option >Tat ca</option>
            <option >Kích hoạt</option>
            <option >Ẩn</option>
          </select>
        </td>
        <td />
      </tr>
      {this.mappingDataUser()}
    </tbody></table>
</div>
</div>

        );
    }
}
 
export default FormRight;
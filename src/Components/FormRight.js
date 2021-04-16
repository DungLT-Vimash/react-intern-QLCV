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
        sort:'',
        status:''
      };
    }
    mappingDataUser=()=> {
      if(this.props.dataUserProps!==null&&this.state.sort===''){
        return (
          this.props.dataUserProps.map((value,key) => (
        
            <Row
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            changeStatus={(id)=>this.props.changeStatus(id)}
            
            editFunClick={(user) => this.props.editFun(value)} 
            userName={value.name}
             key={key} 
            stt={key} 
            
            value={value.value}
            id={value.id}
            editclickbtn={this.props.editclickbtn}
            update={this.props.update}
            />))
        )
      }
      if(this.props.dataUserProps!==null &&this.state.sort==='nameAZ'){
        return (
          this.props.dataUserProps.sort(this.compareAZ).map((value,key) => (
        
            <Row
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            changeStatus={(id)=>this.props.changeStatus(id)}
         
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
      if(this.props.dataUserProps!==null &&this.state.sort==='nameZA'){
        return (
          this.props.dataUserProps.sort(this.compareZA).map((value,key) => (
        
            <Row
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            changeStatus={(id)=>this.props.changeStatus(id)}
         
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

      if(this.props.dataUserProps!==null &&this.state.sort==='statusActive'){
        return (
          this.props.dataUserProps.sort(this.statusActive).map((value,key) => (
        
            <Row
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            changeStatus={(id)=>this.props.changeStatus(id)}
         
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
      if(this.props.dataUserProps!==null &&this.state.sort==='statusHide'){
        return (
          this.props.dataUserProps.sort(this.statusHide).map((value,key) => (
        
            <Row
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            changeStatus={(id)=>this.props.changeStatus(id)}
         
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
      if(this.props.dataUserProps!==null &&this.state.sort==='hide'){
        const result=[];
        this.props.dataUserProps.forEach(element => {
          if(element.value==="false"){
            result.push(element);
     
          }
        });
        console.log(result)
        return (
          result.map((value,key) => (
        
            <Row
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            changeStatus={(id)=>this.props.changeStatus(id)}
         
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
      if(this.props.dataUserProps!==null &&this.state.sort==='active'){
        const result=[]
        this.props.dataUserProps.forEach(element => {
          if(element.value==="true"){
            result.push(element);
          
          }
        });
        console.log(result)
        return (
          result.map((value,key) => (
        
            <Row
            deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
            changeStatus={(id)=>this.props.changeStatus(id)}
         
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
    
    changeStatus=(id)=>{
      this.props.dataUserProps.forEach(element => {
        if(element.id===id){
          if(element.value==="true") return element.value="false";
          if(element.value==="false") return element.value="true";
        }
      });
      localStorage.setItem('userData',JSON.stringify(this.props.dataUserProps))
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
    compareAZ=( a, b )=> {
     if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;}
    compareZA=( a, b )=> {
      
      if ( a.name > b.name ){
        return -1;
      }
      if ( a.name < b.name ){
        return 1;
      }
      return 0;}

      statusHide=( a, b )=> {
      if ( a.value < b.value ){
        return -1;
      }
      if ( a.value > b.value ){
        return 1;
      }
      return 0;}
      statusActive=( a, b )=> {
      if ( a.value > b.value ){
        return -1;
      }
      if ( a.value < b.value ){
        return 1;
      }
      return 0;}
     
      
      listSort=()=>{
        if(this.state.isActive===true&&this.state.sort===''){
          return (
            <div  className="sort-list" id="sort" >

    <div onClick={()=>this.setState({sort:'nameAZ',isActive:false})}><i className="fas fa-sort-alpha-down" /> Tên A-Z  </div>
    <div onClick={()=>this.setState({sort:'nameZA',isActive:false})}><i className="fas fa-sort-alpha-down-alt" /> Tên Z-A </div>
    <hr />
    <div onClick={()=>this.setState({sort:'statusActive',isActive:false})}>Trang thai kich hoat </div>
    <div onClick={()=>this.setState({sort:'statusHide',isActive:false})}>Trang thai an </div>
  </div>
          )
        }
        if(this.state.isActive===true&&this.state.sort==='nameAZ'){
          return (
            <div  className="sort-list" id="sort" >

    <div onClick={()=>this.setState({sort:'nameAZ',isActive:false})}><i className="fas fa-sort-alpha-down" /> Tên A-Z <i className="fas fa-check"/> </div>
    <div onClick={()=>this.setState({sort:'nameZA',isActive:false})}><i className="fas fa-sort-alpha-down-alt" /> Tên Z-A </div>
    <hr />
    <div onClick={()=>this.setState({sort:'statusActive',isActive:false})}>Trang thai kich hoat </div>
    <div onClick={()=>this.setState({sort:'statusHide',isActive:false})}>Trang thai an </div>
  </div>
          )
        }
        if(this.state.isActive===true&&this.state.sort==='nameZA'){
          return (
            <div  className="sort-list" id="sort" >

    <div onClick={()=>this.setState({sort:'nameAZ',isActive:false})}><i className="fas fa-sort-alpha-down" /> Tên A-Z  </div>
    <div onClick={()=>this.setState({sort:'nameZA',isActive:false})}><i className="fas fa-sort-alpha-down-alt" /> Tên Z-A <i className="fas fa-check"/></div>
    <hr />
    <div onClick={()=>this.setState({sort:'statusActive',isActive:false})}>Trang thai kich hoat </div>
    <div onClick={()=>this.setState({sort:'statusHide',isActive:false})}>Trang thai an </div>
  </div>
          )
        }
        if(this.state.isActive===true&&this.state.sort==='statusActive'){
          return (
            <div  className="sort-list" id="sort" >

    <div onClick={()=>this.setState({sort:'nameAZ',isActive:false})}><i className="fas fa-sort-alpha-down" /> Tên A-Z  </div>
    <div onClick={()=>this.setState({sort:'nameZA',isActive:false})}><i className="fas fa-sort-alpha-down-alt" /> Tên Z-A </div>
    <hr />
    <div onClick={()=>this.setState({sort:'statusActive',isActive:false})}>Trang thai kich hoat <i className="fas fa-check"/> </div>
    <div onClick={()=>this.setState({sort:'statusHide',isActive:false})}>Trang thai an </div>
  </div>
          )
        }
        if(this.state.isActive===true&&this.state.sort==='statusHide'){
          return (
            <div  className="sort-list" id="sort" >

    <div onClick={()=>this.setState({sort:'nameAZ',isActive:false})}><i className="fas fa-sort-alpha-down" /> Tên A-Z  </div>
    <div onClick={()=>this.setState({sort:'nameZA',isActive:false})}><i className="fas fa-sort-alpha-down-alt" /> Tên Z-A </div>
    <hr />
    <div onClick={()=>this.setState({sort:'statusActive',isActive:false})}>Trang thai kich hoat </div>
    <div onClick={()=>this.setState({sort:'statusHide',isActive:false})}>Trang thai an <i className="fas fa-check"/></div>
  </div>
          )
        }
        
      }
      
      hide=()=>{
        var result=[]
        this.props.dataUserProps.forEach(element => {
          if(element.value===2){
            result.push(element)
          }
        });
      }
      active=()=>{
        var result=[]
        this.props.dataUserProps.forEach(element => {
          if(element.value===1){
            result.push(element)
          }
        });
      }
      handleChange(event) {
   
        const value=event.target.value
        this.setState({sort:value})
        
        
      }
      
    render() { 

     
        return (
            <div className="div-right">
  <div><button className="button btnadd" onClick={this.props.onchangeform}><i className="far fa-plus" /> Them Cong Viec</button></div>
  <div>
    <input type="text"   onChange={(event)=>this.isChange(event)}/>
    <button className="button btnadd"><i className="far fa-search"  onClick={(dl)=>this.props.getTextSearch(this.state.tempValue)}/> tim</button>
    <div className="btnsort">
  <button className="button btnadd " onClick={this.handleToggle}>sap xep <i className="fad fa-caret-square-down " /></button>
 
  {this.listSort()}
</div>
  </div>
  <div>
  <table className="table">
    <tbody><tr>
        <th>STT</th>
        <th >Ten</th>
        <th>Trang Thai</th>
        <th>Hanh Dong</th>
      </tr>
      <tr>
        <td />
        <td ><input type="text" className="lname" name="find" onChange={(event)=>this.isChange(event)}/></td>
        <td>
          <select className="trangthai"  onChange={(event)=>this.handleChange(event)}>
            <option value=''>Tat ca</option>
            <option name='active' value='active'> Kích hoạt</option>
            <option name='hide' value='hide'>Ẩn</option>
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
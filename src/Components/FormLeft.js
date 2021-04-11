import React, { Component } from 'react';
 
class FormLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"2",
      name:"",
      id:""
     
      
    };
  }
  componentDidMount(){
    if(this.props.nameForm===true){
      this.setState({titleForm:"Them"})
    }else  {
      this.setState({titleForm:"sua",
      name:this.props.userEditObject.name,
      value:this.props.userEditObject.value,
      id : this.props.userEditObject.id
    })
    }

  }
  isChange =(event)=>{
    const name= event.target.name;
    const value= event.target.value;
   
    this.setState({
      [name]:value
    });
    var item={};
    item.name=this.state.name;
    item.value=this.state.value;
    
   
  }
  
 
  
  
   myFunction=()=> {
    document.getElementById("myForm").reset();

  }
  add=()=>{
    if(this.props.nameForm===true){
      this.props.add(this.state.name,this.state.value);
    }else{
      var info={};
      info.id=this.state.id;
      info.name=this.state.name;
      info.value=this.state.value;
      this.props.getUserEditInfo(info);
    }
    
    document.getElementById("myForm").value="";
  };

  titleForm=()=>{
    if(this.props.nameForm===true){
      return "them"
    }else return "sua"
  }
    render() { 

        return (
            <div className="menu-left">
  <div className="title">
  <div className="add" >{this.titleForm()}</div>
    <div className="icon-close" onClick={this.props.close}><i className="fad fa-times-circle textright" /></div>
  </div>
  <div className="panel-body">
    <div>
      <div><label>Ten :</label></div>
      <input name="name" id="myForm" type="text" className="name" onChange={(event)=>this.isChange(event)} defaultValue={this.state.name}  />
    </div>     
    <div>
      <div><label>Trạng Thái</label></div>
      <select value={this.state.value}   name="value" className="trangthai" onChange={(event)=>this.isChange(event)} >
        <option  value="1">Kích hoạt</option>
        <option  value="2">Ẩn</option>

      </select>
    </div>
    <div className="divbutton">
      <button type="button" className="button save" onClick={this.add} ><i className="fal fa-plus" /> Lưu lại</button>
      <button type="button" className="button cancel" onClick={this.props.close}><i className="fal fa-times" /> Huỷ bỏ</button>
    </div>
  </div>
</div>

        );
    }
}
 
export default FormLeft;
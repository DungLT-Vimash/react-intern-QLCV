import React, { Component } from 'react';
 
class FormLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"false",
      name:"",
      id:"",
      nameForm:true,
      
      
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
    const value= this.slug(event.target.value);
    
    
    this.setState({
      [name]:value
    });
    
    
    
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
    this.props.close();
  };
  
  slug=(str)=>{
    // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
}
  componentDidUpdate=(prevProps, prevState, snapshot)=>{
    
      if(this.props.userEditObject.id!==prevProps.userEditObject.id){
        // name =this.props.userEditObject.name
     
          this.setState({
            name:this.props.userEditObject.name,
            value:this.props.userEditObject.value,
            id : this.props.userEditObject.id
          })
    }
    
      
  }
  titleForm=()=>{
    if(this.props.nameForm===true){
      
      
      return "them"
    }else return "sua"
  }
  name=()=>{
    if(this.props.nameForm===true){
      
      
      return ""
    }else return this.state.name
  }
  

    render() { 
   
    //  const name =this.props.userEditObject.name

        return (
            <div className="menu-left">
  <div className="title">
  <div className="add" >{this.titleForm()}</div>
    <div className="icon-close" onClick={this.props.close}><i className="fad fa-times-circle textright" /></div>
  </div>
  <div className="panel-body">
    <div>
      <div><label>Ten :</label></div>
      <input name="name" id="myForm" type="text" className="name" onChange={(event)=>this.isChange(event)} defaultValue={this.name()}  />
    </div>     
    <div>
      <div><label>Trạng Thái</label></div>
      <select defaultValue={this.state.value}   name="value" className="trangthai" onChange={(event)=>this.isChange(event)} >
      <option  value={true}>Kích hoạt</option>
        <option  value={false}>Ẩn</option>
        
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
import React, { Component } from 'react';
import Header from './Header'
import './../App.css';
import FormLeft from './FormLeft';
import FormRight from './FormRight';
import './../fontawesome/css/all.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      searchText:'',
      editUserStatus:false,
      data:[],
      nameForm:true,
      userObj:{},tempValue:''
      
    };
  }
  
  
  componentDidMount() {
    
   if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData',[]);
    }else{
      var temp=JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }
  getUserEditInfo=(info)=>{
    console.log("info ",info)
    this.setState({
      userObj : info
    });
    this.getUserEditInfoApp(info)

  }
  
   getUserEditInfoApp=(info)=>{
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.name=info.name;
        value.value=info.value;
      }
      
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  }
  
  

  editUser = (user)=>{
 
    this.setState({
      userEditObject: user
    })
  }
  getNameForm=(name)=>{
    name="Ten"
  }
  getNewUserData=(name,value)=>{
    var item = {};
    item.id=uuidv4();
    item.name=name;
    item.value=value;
   

    var items =this.state.data;
    
    items.push(item);
    this.setState({
      data:items
    })
    localStorage.setItem('userData',JSON.stringify(items));
    
    
  }
  getTextSearch=(dl)=>{
    this.setState({
      searchText:dl
    });

  }
 
 
  
  
  
  deleteUser = (idUser) => {  
    
    var  tempData = this.state.data.filter(item => item.id !== idUser);
     this.setState({
       data:tempData
     });
   
   localStorage.removeItem('userData',JSON.stringify(idUser));
   }
  
  render() { 
    // localStorage.setItem('userData',JSON.stringify(DataUser));
    var result=[];
   
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!== -1){
        result.push(item);
      }
    })
   
    
  return (
    
    <div className="App">
      <Header/>
      <div className="main">
        {
         this.state.showForm&& <FormLeft nameForm={this.state.nameForm}
          add={(name,value)=>this.getNewUserData(name,value)}
          onchangeform={()=>this.setState({ showForm:true})}
          close={()=>this.setState({ showForm:false})}
          getUserEditInfoApp ={(info) => this.getUserEditInfoApp(info)}
          userEditObject={this.state.userEditObject}
          getTextSearch={(dl)=>this.getTextSearch(dl)}
          editUserStatus={this.state.editUserStatus}
          
          getUserEditInfo={(info)=>this.getUserEditInfo(info) }
          />
          
        }
        <FormRight onchangeform={()=>{this.setState({ showForm:true,nameForm:true})} }
         deleteUser={(idUser)=>this.deleteUser(idUser)} 
         editFun={(user)=>this.editUser(user)} 
           getTextSearch={(dl)=>this.getTextSearch(dl)}
            dataUserProps={result} 
             editclickbtn={()=>{this.setState({ showForm:true,nameForm:false})}} />
      </div>
    </div>

    );
  }
}
 
export default App;
//function component
// const functionComponent = () => {
//   const [state, setState] = useState({id: '', name: ''});

//   const handleDelete = () => {
//     setState({...state, name: 'bla bla'});
//   }

//   return (
//     <div>

//     </div>
//   )
// }
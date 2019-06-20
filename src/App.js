import React, {Component} from 'react';
 
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      title: "Simple CRUD React app",
      act: 0,
      index: '',
      datas: []

    }
     
  }

  componentDidMount(){
    this.refs.name.focus();
  }
  fSubmit=(e)=>{
    e.preventDefault();
    console.log("Try");
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
     let data = {
       name ,
       address
     }
    datas.push(data);
    this.setState({
      datas:datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();

  }
  render(){
    let datas = this.state.datas;
    
    return(
   
      <div className="App">
        <h1>{this.state.title}</h1>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your-Name" className="formField"/>
          <input type="text" ref="address" placeholder="your-address" className="formField"/>
          <button className="btn btn-success" onClick={(e)=>this.fSubmit(e)}>Submit</button>
        </form>
        <pre>
          
        {
          datas.map((data, i) =>{
          <li key='i' className='myList'>
            (i+1).data.name, data.address;
            <button className="btn btn-success" onClick={()=>this.fRemove(i)}>Remove</button>
            <button className="btn btn-success" onClick={()=>this.fEdit(i)}>Edit</button>
          </li>

          })
        }    
        </pre>
      </div>
    );
  }
     
}

export default App;

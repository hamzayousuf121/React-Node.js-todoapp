import React from 'react';
import {connect } from 'react-redux';
import {handleInputAction} from "../myactions/actions"
class Home extends React.Component{
  state={
    text:'',
    mywishes:[]
  }
  handledelete(id){
    fetch('/remove/'+id,{method:"delete"})
    .then(res=>res.json())
    .then(res2=>{
      console.log(res2)
      const newWishes = this.state.mywishes.filter(item=>{
        return item._id !== res2._id
      })
      this.setState({
        mywishes:newWishes
      })
    })
  }
  componentDidMount(){
    fetch('/data')
    .then(res=>res.json())
    .then(res2=>{
      console.log(res2)
      this.setState({
        mywishes:res2
      })
    })
  }
  handleSubmit(e){
        e.preventDefault();
        if(this.state.text === '') return null
        else {
       // const url = "http://localhost:5000/sent";
        var data = new URLSearchParams();
         for(const pair of new FormData(e.target)){
           data.append(pair[0],pair[1])
         }
         //localhost:5000/sent
        fetch('/sent',{
            method:"post",
            body:data,
           
        }).then(res=>res.json())
        .then(res2 => {
          console.log(res2)
        
          this.setState({
            mywishes:[...this.state.mywishes,res2],
            text:''
          })
        }); 
  }
}
  render(){
     const list = this.state.mywishes.map(item=>{
       return <a className="collection-item" 
       key={item._id}>{item.wish}<button className="waves-effect waves-purple btn"
        onClick={()=>this.handledelete(item._id)}>Delete</button></a>
     })
      return(
        <div>
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <input 
              type="text"
              name="item"
              value={this.state.text} 
              onChange={(e)=>this.setState({
                text:e.target.value})}
               />
              <button type="submit" className="waves-effect waves-light btn">Add Todo</button> 
          </form>

       <div className="collection">
         {list}
      </div>
        </div>
      )
  }
 
}
const mapStateToProps = (state)=>{
  return{
    text: state.text
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
     handleinput :(input) =>{dispatch(handleInputAction(input))}
     //handleinput :(input) =>{console.log(input)}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

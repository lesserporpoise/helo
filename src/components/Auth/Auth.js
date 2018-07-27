import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      password:""
    }
  }

  userHandler(val){
    this.setState({name:val})
    console.log(this.state.user)
  }

  passHandler(val){
    this.setState({password:val})
  }
  register(){
    let wallaby ={name:this.state.name,password:this.state.password};
    console.log(wallaby)
  axios.post('/api/register',wallaby).then((response)=>console.log(response))}

  render() {
    return (
      <div>
        <div>
          <img src="https://www.wirelesshack.org/wp-content/uploads/2018/01/How-To-Install-Doge-Kodi-Addon.jpg" alt="" width="200px"/>
          <h1>Helo</h1>
          <div><h3>Username:</h3><input onChange={(e)=>this.userHandler(e.target.value)}/></div>
          <div><h3>Password:</h3><input onChange={(e)=>this.passHandler(e.target.value)}/></div>
          <button>Login</button>
          <button onClick={()=>this.register()}>Register</button>
        </div>
      </div>
    )
  }
}


export default Auth

//
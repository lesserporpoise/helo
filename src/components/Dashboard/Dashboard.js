import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      allPosts:[],
      input:'',
      checkbox:true
    }
  }

  componentDidMount(){
    axios.get('/api/posts').then((response)=>{console.log(response);
    this.setState({allPosts:response.data})})
  }

  render() {

    this.state.allPosts.map((x,y,z)=>{})
    return (
      // this section is supposed to be able to make an axios call to the datab
      // ase to get the listof posts . I don't know that we are going to add that feature today.
      // we might very well just be sure to hit any other sim requirements for today.
      <div>
        <input placeholder="Search by Title"/>
        <button>Search</button>
        <button>Reset</button>
        <h5>My Posts</h5>
        <input type="checkbox"/>
        Dashboard
        <div>{this.state.allPosts.map((x,y,z)=>{<div><p>Title:{x}</p><p>{y}</p><p>Name of OP</p></div>
                                                })}</div>
      </div>
    )
  }
}

export default Dashboard
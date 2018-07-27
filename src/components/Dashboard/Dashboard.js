import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      allPosts:[],
      input:'',
      checkbox:true,
      whichUser:0
    }
  }

  componentDidMount(){
    axios.get('/api/posts').then((response)=>{console.log(response);
    this.setState({allPosts:response})})
  }

  fetchPosts(){
    axios.get('/api/posts').then((response)=>{console.log(response);
      this.setState({allPosts:response});
    console.log(this.state.allPosts.data[0])})
  }
  // fetchPosts(){
  //   axios.get(`api/posts/${}`).then((response)=>{console.log(response);
  //     this.setState({allPosts:response});
  //   console.log(this.state.allPosts.data[0])})
  // }

  render() {

    // let valueArr = this.state.allPosts.data.slice(0)
    
    // this.state.allPosts.map(x=>valueArr.push(x))
    // console.log(valueArr)
    return (

      <div>
        <button onClick={()=>this.fetchPosts()}>Retrieve Posts</button>
        <input placeholder="Search by Title"/>
        <button>Search</button>
        <button>Reset</button>
        <h5>My Posts</h5>
        <input type="checkbox"/>
        Dashboard
        {/* <div>{JSON.stringify(this.state.allPosts.data)}</div> */}
        {/* <div>{valueArr?valueArr.map((x,y,z)=>{
        <div><p>Title:{x}</p><p>{y}</p><p>--Name of OP--</p></div>
        }):"waffle"}</div> */}
        {/* <input onClick={()=>getOne()}/> */}
      </div>
    )
  }
}

export default Dashboard
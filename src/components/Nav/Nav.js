import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
 
export function Nav(props){
  console.log(props)
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.profilePicture} alt=''/>
      <br/>
      Nav
      <br/>
      <Link to="/dashboard"><button>Home</button></Link>
      <Link to="/post/:postid"><button>New Post</button></Link>
      <Link to="/"><button>Logout</button></Link>
    </div>
  )
}

function mapStateToProps(state){
return{
  name:state.name,
  profilePicture:state.profilePicture
}
}

export default connect(mapStateToProps,{})(Nav)

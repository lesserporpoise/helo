import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        New Post Form
        <div><h3>Title:</h3><input/></div>
        <img src='https://www.wirelesshack.org/wp-content/uploads/2018/01/How-To-Install-Doge-Kodi-Addon.jpg' alt='' width="200px"/>
        <div><h3>Image URL:</h3><input/></div>
        <div><h3>Content</h3><input/></div>
        <button>Post</button>
      </div>
    )
  }
}

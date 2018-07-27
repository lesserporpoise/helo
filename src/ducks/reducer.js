const initialState = {
    name:'alpha',
    id:'id',
    profilePicture:'https://www.wirelesshack.org/wp-content/uploads/2018/01/How-To-Install-Doge-Kodi-Addon.jpg'

}
const UPDATE_STATE = "UPDATE_STATE";



export function updateState(name,id,profilePicture){
  return{
  type: UPDATE_STATE,
  payload:{name,id,profilePicture}
  }
}


export default function reducer(state = initialState, action){
  switch (action.type) {

  case UPDATE_STATE:
    return {
      name:action.name,
      id:action.id,
      profilePicture:action.profilePicture
    }

  default:
    return state
  }
}

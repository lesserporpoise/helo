const initialState = {
    name:'alpha',
    id:'id',
    profilePicture:'insertURl'

}

const 

export const actionName = (param) => ({
  type: type,
  payload: payload
})


export default (state = initialState, action) => {
  switch (action.type) {

  case typeName:
    return { ...state }

  default:
    return state
  }
}

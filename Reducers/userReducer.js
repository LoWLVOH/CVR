export default function userReducer(state=[], action) {
  if(action.type == 'validId') {
    console.log('reducer', action.userData);
      return  {userData} = action.userData
  } else {
      return state
  }
}

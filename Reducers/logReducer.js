export default function logReducer(state=false, action) {
  if(action.type == 'login') {
    console.log("dans le reducer");
      return  state=true
  } else {
      return state
  }
}

export default function logReducer(state="welcome", action) {
  if(action.type == 'signUp') {
      return  action.pageName
  } else if(action.type == 'signIn') {
      return  action.pageName
  } else {
      return state
  }
}

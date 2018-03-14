export default function logReducer(state=false, action) {
  if(action.type == 'isLog') {
      return  state=true;
  } else {
      return state;
  }
}

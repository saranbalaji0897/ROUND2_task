
import action, { types } from '../store/action'

export const initialState = {
    users : []
}


const userReducer =  (state = initialState,action) => {
    switch (action.type) {
      case types.ADD_USER:
            console.log(state.users);
            return  { ...state,users:[...state.users,action.payload] }
      case types.LIST_USER:
            console.log(state.users);
            return { ...state};
    }
  
    return  state;
  };
  
export default userReducer;
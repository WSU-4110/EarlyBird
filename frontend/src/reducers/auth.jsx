// import {AUTH, LOGOUT} from '../constants/actionTypes';

// const authReducer = (state = { authData: null }, action) => {
//     switch(action.type) {
//         case AUTH:
//             //setting the data into local storage
//             // when we fresh the page, we still login
//             localStorage.setItem('profile', JSON.stringify({ ... action?.data}))
//             return { ... state, authData: action?. data};
//         case LOGOUT:
//             localStorage.clear();
//             return { ... state, authData: null};
//         default:
//             return state;
//     }
// };


import * as actionType from '../constants/actionTypes';



import { COMMENT} from '../constants/actionTypes';
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};
const authReduce = (state = { isLoading: true, posts: []}, action) =>{
  switch (action.type){
    case COMMENT:
      return{
        ...state,
        props: state.props.map((props) => {
            if(props._id==+action.payload._id){
              return action.payload;
            }

            return props;
        })
      }
  }
}

export default authReducer;
import { fromJS } from 'immutable';


const rootInitialState = fromJS({
  nameList: ['He-Man'],
});

function rootReducer(state = rootInitialState, action) {
  switch (action.type) {

    case 'ADD_NAME':
      return state
        .set('nameList', [...state.get('nameList'), action.payload])

    case 'REMOVE_NAME':
      return state
        .set('nameList', [...state.get('nameList').slice(0, action.payload), ...state.get('nameList').slice(action.payload + 1)])

    default:
      return state;
  }
}


export default rootReducer;

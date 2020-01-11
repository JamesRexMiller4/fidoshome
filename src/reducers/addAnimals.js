const addAnimalsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ANIMALS':
      return action.animals
  
    default:
      return state;
  }
}

export default addAnimalsReducer;
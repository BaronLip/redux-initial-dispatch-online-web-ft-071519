

//Instead of setting initial state here, at the declaration of state ...
let state

// set the initial state within the arguments of the function.
// This is a default argument. 
function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({ type: "@@INIT" })
dispatch({ type: 'INCREASE_COUNT' })
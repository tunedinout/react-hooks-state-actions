import { useState, useEffect } from 'react';
import { globalReducer } from './reducers/reducers';


function setState(newState) {
    this.state = { ...this.state, ...newState };
    let thisState = this.state;
    this.listeners.forEach((listener) => {
        listener(thisState);
    })
}

//custom hook
function useCustom() {
    let listeners = this.listeners;
    const newListener = useState()[1];
    useEffect(() => {
        listeners.push(newListener);
        //below function executed just before componentWillUnmount
        return () => {
            listeners = listeners.filter(listener => listener!== newListener)
        }
    },[])
    const state = this.state, setState = this.setState;
    function dispatch(action){
        const nextState = globalReducer(state,action);
        setState(nextState);
    }

    return [this.state, dispatch];
}


function associateActions(store,actions){
   const associatedActions = {};

   console.log(actions);
   Object.keys(actions).forEach((action,key)=>{
       if(typeof actions[key] === 'function')
        associatedActions[key] = actions[key].bind(null,store);
         //if it is a function pass the store
         //if it is an object i.e a set of actions
        else if(typeof actions[key] == 'object')
        associatedActions[key] = associateActions(store,actions[key]);
   })
  
   return associateActions;
}


function useStateHook(initialState,actions) {
    // console.log(initialState);
    const state = { ...initialState }
    const store = { state: state, listeners: [] };
    
    store.setState = setState.bind(store);
    store.actions = associateActions(store,actions);
    
    return useCustom.bind(store);
}


export default useStateHook;
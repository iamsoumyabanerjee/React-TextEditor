import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  content: 'This is default text',
  currentSelection: ''
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_CONTENT':
      return {...state, content: action.payload}
    case 'SELECTED_CONTENT':
      return {...state, currentSelection: action.payload}
    case 'ADD_COMMAS':
      return { ...state, content: action.payload };
    default:
      return state;
  }    
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
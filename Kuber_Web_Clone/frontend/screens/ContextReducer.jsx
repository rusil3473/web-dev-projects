import { createContext,useReducer } from "react";

export const loginContext=createContext();
const initialState={isLogin:false};

const loginReducer=(state,action)=>{

  switch(action.type){
    case "Login":
      return {isLogin:true}
    case "Logout":
      return {isLogin:false}
    default:
      return state
  }

}

export const LoginContextProvider=({children})=>{
  const [state,dispatch]=useReducer(loginReducer,initialState);
  return (
  <loginContext.Provider value={{state,dispatch}}>
    {children}
  </loginContext.Provider>)
}


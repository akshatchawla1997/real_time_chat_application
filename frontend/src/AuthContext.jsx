import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { baseURL, postRequest } from "./services";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null)
  const [isRegisterLoading, setisRegisterLoading] = useState(false)
  const [registerInfo, setRegisterInfo] = useState({
    name:"",
    email:"",
    password:""
  });

  console.log(registerInfo,"register info")

  useEffect(()=>{
    const user = localStorage.getItem("User")
    setUser(JSON.parse(user))
  },[])
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const registerUser = useCallback(async(e)=>{
    e.preventDefault()
    setisRegisterLoading(true)
    setRegisterError(null)
    const response = await postRequest(`register`, registerInfo)
    setisRegisterLoading(false)
    if(response.error){
        return setRegisterError(response)
    }
    localStorage.setItem('user', JSON.stringify(response))
    setUser(response)
  })
  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

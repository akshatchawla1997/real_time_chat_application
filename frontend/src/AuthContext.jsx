import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { postRequest, patchRequest } from "./services";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null)
  const [isRegisterLoading, setisRegisterLoading] = useState(false)
  const [loginInfo, setLoginInfo] = useState({
    email:"",
    password:""
  })

  const [registerInfo, setRegisterInfo] = useState({
    name:"",
    email:"",
    password:""
  });
  const [isLoginLoading, setisLoginLoading] = useState(false)
  const [isLoginError, setIsLoginError] = useState(null)


  console.log(loginInfo,"login info")
  console.log(user, "user")

  useEffect(()=>{
    const user = localStorage.getItem("user")
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

  const logoutUser = useCallback(()=>{
    localStorage.removeItem("user")
    setUser(null)
  }, [])

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const loginUser = useCallback(async()=>{
    setisLoginLoading(true)
    setIsLoginError(null)
    const response = await patchRequest('login', loginInfo)
    setisLoginLoading(false)
    if(response.error){
        return setIsLoginError(response)
    }
    localStorage.setItem('user', JSON.stringify(response))
    setUser(response)
  },[loginInfo])
  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginUser,
        isLoginError,
        updateLoginInfo,
        loginInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

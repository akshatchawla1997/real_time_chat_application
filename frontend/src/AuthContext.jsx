import { Children, createContext, useState } from "react";

import React from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ Children }) => {
  const [user, setUser] = useState({
    name: "",
  });
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {Children}
    </AuthContext.Provider>
  );
};

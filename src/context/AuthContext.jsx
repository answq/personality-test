import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );

  const saveToken = (token) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, accessToken, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { useState, useEffect, useContext, createContext } from "react";
import { apiPost } from "services/api";

const INITIAL_STATE = {
  user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user") || '{}') : null,
  signIn: async (email: string, password: string) => {},
  register: (username: string, email: string, password: string) => {},
  logout: () => {},
};

// WILL CHANGE THIS LATER
const AuthContext = createContext<any>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useAuthProvider() {
  const [user, setUser] = useState<any>(JSON.stringify(INITIAL_STATE.user) === JSON.stringify("{}")? null : INITIAL_STATE.user);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    console.log("REGISTER");
    await apiPost("api/auth/register", {
      username: username,
      email: email,
      password: password,
    }, null);
  };

  const signIn = async (email: string, password: string) => {
    console.log("SIGN IN");
    const res = await (await apiPost("api/auth/login", { email, password }, null)).data;
    console.log(res);
    setUser(res);
  };

  const authenticateEmail = async (email: string, verificationCode: string) => {
    console.log("AUTHENTICATE");
    try {
      const res = await apiPost("api/auth/verifyEmail", {
        email: email,
        verificationCode: verificationCode,
      }, null);
      return true;
    } catch (err) {
      return false;
    }
  };

  const logout = () => {
    console.log("LOG OUT");
    setUser(null);
  };

  const emailExists = async (email: string) => {
    const res = await apiPost("api/auth/emailExists", { email }, null);
    return res.data;
  };

  return {
    user,
    setUser,
    signIn,
    register,
    logout,
    authenticateEmail,
    emailExists,
  };
}

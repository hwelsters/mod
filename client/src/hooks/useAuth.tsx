import React, { useState, useEffect, useContext, createContext } from "react";
import { apiPost } from "services/api";

const INITIAL_STATE = {
  user: localStorage.getItem("user") || null,
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
  const [user, setUser] = useState<any>(INITIAL_STATE.user);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    await apiPost("register", {
      username: username,
      email: email,
      password: password,
    });
  };

  const signIn = async (email: string, password: string) => {
    setUser(await apiPost("/login", { email, password }));
  };

  const authenticateEmail = async (email: string, otp: string) => {
    return true;
    await apiPost("/verifyEmail", { email, otp });
  };

  const logout = () => {
    setUser(null);
  };

  const emailAlreadyExists = (email: string) => {
    return true;
  };

  return {
    user,
    signIn,
    register,
    logout,
    authenticateEmail
  };
}

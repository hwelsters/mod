import React, { useState } from "react";

import PageContainer from "layouts/PageContainer/PageContainer";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer";
import Logo from "layouts/Logo/Logo";

import styles from "./Login.module.css";
import Input from "components/Input/Input";
import PasswordInput from "components/PasswordInput/PasswordInput";
import Button from "components/Button/Button";
import { useAuth } from "hooks/useAuth";
import pageURLs from "data/pageURLs";

export default function Login() {
  const auth = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    setError("");
    setButtonDisabled(true);
    try {
      await auth.signIn(email, password);
      window.location.href = pageURLs.home;
    } catch (err: any) {
      setError("Incorrect credentials");
    }
    setButtonDisabled(false);
  };
  return (
    <PageContainer>
      <Navbar />
      <div className={styles.root}>
        <form className={styles.block} onSubmit={onSubmit}>
          <span className={styles.logo}>
            <Logo />
          </span>
          <Input
            label="Email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <PasswordInput
            label="Password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Button text="Login" disabled={buttonDisabled} />
          <span className={styles.error}>{error}</span>
        </form>
      </div>
      <Footer />
    </PageContainer>
  );
}

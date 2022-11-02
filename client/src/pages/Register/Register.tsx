import React, { useState } from "react";

import PageContainer from "layouts/PageContainer/PageContainer";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer";
import Logo from "layouts/Logo/Logo";

import styles from "./Register.module.css";
import Input from "components/Input/Input";
import PasswordInput from "components/PasswordInput/PasswordInput";
import EmailRegister from "./components/EmailRegister/EmailRegister";
import PasswordRegister from "./components/PasswordRegister/PasswordRegister";
import UsernameRegister from "./components/UsernameRegister/UsernameRegister";
import CompletionRegister from "./components/CompletionRegister/CompletionRegister";

export default function Register() {
  const EMAIL = 0;
  const USERNAME = 1;
  const PASSWORD = 2;
  const COMPLETED = 3;

  const [step, setStep] = useState<number>(3);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const showStep = () => {
    switch (step) {
      case EMAIL:
        return (
          <EmailRegister setStep={setStep} email={email} setEmail={setEmail} />
        );
      case USERNAME:
        return (
          <UsernameRegister
            setStep={setStep}
            username={username}
            setUsername={setUsername}
          />
        );
      case PASSWORD:
        return (
          <PasswordRegister
            setStep={setStep}
            password={password}
            setPassword={setPassword}
          />
        );
      case COMPLETED:
        return <CompletionRegister />;
    }
  };

  return (
    <PageContainer>
      <Navbar />
      <div className={styles.root}>
        <form className={styles.block}>
          <span className={styles.logo}>
            <Logo />
          </span>
          <span className={styles.step_count}>
            Step {Math.min(step + 1, 3)} of 3
          </span>
          <span className={styles.progress_div}>
            <div
              className={styles.progress_bar}
              style={{ width: `${step * 33.3}%` }}
            />
          </span>

          {showStep()}
        </form>
      </div>
      <Footer />
    </PageContainer>
  );
}

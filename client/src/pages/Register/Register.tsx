import React, { useState } from "react";

import PageContainer from "layouts/PageContainer/PageContainer";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer";
import Logo from "layouts/Logo/Logo";

import styles from "./Register.module.css";
import EmailRegister from "./components/EmailRegister/EmailRegister";
import PasswordRegister from "./components/PasswordRegister/PasswordRegister";
import UsernameRegister from "./components/UsernameRegister/UsernameRegister";
import VerifyRegister from "./components/VerifyRegister/VerifyRegister";
import CongratulationsRegister from "./components/CongratulationsRegister/CongratulationsRegister";

import { useAuth } from "hooks/useAuth";

export default function Register() {
  const auth = useAuth();

  const EMAIL = 0;
  const USERNAME = 1;
  const PASSWORD = 2;
  const VERIFY = 3;
  const MAX_PAGE = 4;

  const [step, setStep] = useState<number>(0);
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
      case VERIFY:
        console.log(auth.register(username, email, password));
        return <VerifyRegister setStep={setStep} email={email}/>;
      case MAX_PAGE:
        return <CongratulationsRegister/>
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
            Step {Math.min(step + 1, MAX_PAGE)} of {MAX_PAGE}
          </span>
          <span className={styles.progress_div}>
            <div
              className={styles.progress_bar}
              style={{ width: `${step * (100 / MAX_PAGE)}%` }}
            />
          </span>

          {showStep()}
        </form>
      </div>
      <Footer />
    </PageContainer>
  );
}

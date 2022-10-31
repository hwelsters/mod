import React, { useState } from "react";

import PageContainer from "layouts/PageContainer/PageContainer";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer";
import Logo from "layouts/Logo/Logo";

import styles from "./Login.module.css";
import Input from "components/Input/Input";
import PasswordInput from "components/PasswordInput/PasswordInput";
import Button from "components/Button/Button";

export default function Login() {
  return (
    <PageContainer>
      <Navbar />
      <div className={styles.root}>
        <form className={styles.block}>
          <span className={styles.logo}>
            <Logo />
          </span>
          <Input label="Email" />
          <PasswordInput label="Password" />
          <Button text="Login"/>
        </form>
      </div>
      <Footer />
    </PageContainer>
  );
}

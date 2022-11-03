import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useAuth } from "hooks/useAuth";
import React, { useState, useEffect } from "react";
import pageURLs from "data/pageURLs";
import validateEmail from "utils/validateEmail";

import styles from "./EmailRegister.module.css";

export default function EmailRegister({
  setStep,
  email,
  setEmail,
}: {
  setStep: any;
  email: string;
  setEmail: any;
}) {
  const auth = useAuth();
  const [isValidEmail, setIsValidEmail] = useState<boolean>(
    validateEmail(email)
  );
  const [error, setError] = useState<string>("");

  const onClick = async (e: any) => {
    const emailExists = await auth.emailExists(email);
    console.log(emailExists);
    if (emailExists.exists) {
      if (emailExists.verified) {
        window.location.href = pageURLs.login;
      } else setStep(3);
      setError("Email already exists");
    } else if (!isValidEmail) {
      setError("Email is invalid format");
    } else setStep((step: any) => step + 1);
  };

  useEffect(() => setIsValidEmail(validateEmail(email)), [email]);

  return (
    <React.Fragment>
      <Input
        label="Email ✉️"
        onChange={(event: any) => setEmail(event.target.value)}
        value={email}
      />
      <Button text="Next" onClick={onClick} disabled={!isValidEmail} />
      <span className={styles.error}>{error}</span>
    </React.Fragment>
  );
}

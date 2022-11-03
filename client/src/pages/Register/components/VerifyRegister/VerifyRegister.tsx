import React, { useEffect, useState } from "react";

import { useAuth } from "hooks/useAuth";

import NumberInput from "components/NumberInput/NumberInput";

import styles from "./VerifyRegister.module.css";
import pageURLs from "data/pageURLs";
import Button from "components/Button/Button";

type VerifyRegisterParams = {
  email?: string;
  setStep?: any;
};
export default function VerifyRegister({
  email,
  setStep,
}: VerifyRegisterParams) {
  const { authenticateEmail } = useAuth();
  const [otp, setOtp] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (disabled) return;
    const authenticate = async () => {
      if (otp.length === 5) {
        setDisabled(true);
        try {
          const res = await authenticateEmail(email, otp);
          console.log(res);
          if (res === true) setStep((step: number) => step + 1);
        } catch (err : any) {
          console.log(err);
          setError("Failed to verify email, try again.");
        }
        setDisabled(false);
      }
    };
    authenticate();
  }, [otp]);

  return (
    <React.Fragment>
      <span className={styles.text}>
        Please enter the verification code sent to your email ✉️
      </span>
      <NumberInput length={5} setValue={setOtp} disabled={disabled} />
      <span>{error}</span>
    </React.Fragment>
  );
}

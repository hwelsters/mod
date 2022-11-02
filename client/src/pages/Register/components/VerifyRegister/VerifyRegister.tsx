import React, { useEffect, useState } from "react";

import { useAuth } from "hooks/useAuth";

import NumberInput from "components/NumberInput/NumberInput";

import styles from "./VerifyRegister.module.css";
import pageURLs from "data/pageURLs";

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

  useEffect(() => {
    const authenticate = async () => {
      if (otp.length === 5) {
        setDisabled(true);
        const res = await authenticateEmail(email, otp);
        if (res === true) setStep((step: number) => step + 1);
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
    </React.Fragment>
  );
}

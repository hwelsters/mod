import Input from "components/Input/Input";
import NumberInput from "components/NumberInput/NumberInput";
import { useState } from "react";
import styles from "./CompletionRegister.module.css";
export default function CompletionRegister() {

  const [otp, setOtp] = useState<string>("");
  console.log(otp);
  return (
    <>
      <span className={styles.text}>Please enter the verification code sent to your email ✉️</span>
      <NumberInput length={5} setValue={setOtp}/>
    </>
  );
}

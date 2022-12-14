import React, { useState, useEffect } from "react";

import Button from "components/Button/Button";
import PasswordInput from "components/PasswordInput/PasswordInput";
import validatePassword from "utils/validatePassword";
import { hasLowerCase, hasUpperCase, hasSpecialChars, hasEightLetters, isMatching } from "utils/passwordCharacteristics";

import styles from "./PasswordRegister.module.css";
import PasswordRegisterIcons from "./components/PasswordRegisterIcons/PasswordRegisterIcons";

export default function PasswordRegister({
  setStep,
  password,
  setPassword,
}: {
  setStep: any;
  password: string;
  setPassword: any;
}) {
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [lowerCase, setLowerCase] = useState<boolean>(hasLowerCase(password));
  const [upperCase, setUpperCase] = useState<boolean>(hasUpperCase(password));
  const [specialChars, setSpecialChars] = useState<boolean>(hasSpecialChars(password));
  const [eightLetters, setEightLetters] = useState<boolean>(hasEightLetters(password));
  const [matching, setMatching] = useState<boolean>(isMatching(password, confirmPassword));

  useEffect(()=>{
    setLowerCase(hasLowerCase(password));
    setUpperCase(hasUpperCase(password));
    setSpecialChars(hasSpecialChars(password));
    setEightLetters(hasEightLetters(password));
    setMatching(isMatching(password, confirmPassword));
  }, [password, confirmPassword])

  useEffect(() => setIsValidPassword(validatePassword(password)), [password]);
  return (
    <React.Fragment>
      <PasswordInput label="Password 🤫 " onChange={(event : any) => setPassword(event.target.value)} />
      <PasswordInput label="Confirm Password" onChange={(event : any) => setConfirmPassword(event.target.value)} />

      <span className={styles.grid}>
        <PasswordRegisterIcons text="Lowercase" icon="a" disabled={lowerCase}/>
        <PasswordRegisterIcons text="Uppercase" icon="A" disabled={upperCase}/>
        <PasswordRegisterIcons text="Special" icon="#" disabled={specialChars}/>
        <PasswordRegisterIcons text="Characters" icon="8+" disabled={eightLetters}/>
        <PasswordRegisterIcons text="Matching" icon="=" disabled={matching}/>
      </span>

      <span className={styles.foot}>
        <span
          className={styles.back}
          onClick={() => setStep((step: any) => step - 1)}
        >
          Back
        </span>
        <Button
          text="Next"
          onClick={() => matching && isValidPassword && setStep((step: any) => step + 1)}
          disabled={!(matching && isValidPassword)}
        />
      </span>
    </React.Fragment>
  );
}

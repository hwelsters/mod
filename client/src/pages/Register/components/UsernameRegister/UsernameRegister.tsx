import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useState, useEffect } from "react";

import styles from "./UsernameRegister.module.css";

import validateUsername from "utils/validateUsername";

export default function UsernameRegister({
  setStep,
  username,
  setUsername,
}: {
  setStep: any;
  username: string;
  setUsername: any;
}) {
  const [isValidUsername, setIsValidUsername] = useState<boolean>(false);

  useEffect(() => setIsValidUsername(validateUsername(username)), [username]);
  return (
    <>
      <Input
        label="Username 👋"
        onChange={(event: any) => setUsername(event.target.value)}
        value={username}
      />

      <span className={styles.foot}>
        <span
          className={styles.back}
          onClick={() => setStep((step: any) => step - 1)}
        >
          Back
        </span>
        <Button text="Next" onClick={() => isValidUsername && setStep((step: any) => step + 1)} disabled={!isValidUsername}/>
      </span>
    </>
  );
}

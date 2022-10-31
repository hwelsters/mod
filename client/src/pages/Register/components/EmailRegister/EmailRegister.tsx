import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useState, useEffect } from "react";
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
  const [isValidEmail, setIsValidEmail] = useState<boolean>(validateEmail(email));

  useEffect(() => setIsValidEmail(validateEmail(email)), [email]);

  return (
    <>
      <Input
        label="Email"
        onChange={(event: any) => setEmail(event.target.value)}
        value={email}
      />
      <Button
        text="Next"
        onClick={() => isValidEmail && setStep((step: any) => step + 1)}
        disabled={!isValidEmail}
      />
    </>
  );
}

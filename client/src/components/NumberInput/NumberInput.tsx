import React, { useRef, useState, useEffect } from "react";

import styles from "./NumberInput.module.css";

import Input from "components/Input/Input";
import { isNumber } from "utils/isNumber";

export default function NumberInput({
  length,
  setValue,
  disabled,
}: {
  length: number;
  setValue?: any;
  disabled?: boolean;
}) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeOtpAtIndex = (value: string, index: number) => {
    const newOtp: string[] = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    setValue(newOtp.join(""));
  };

  const changeActiveIndex = (index: number) => {
    setActiveIndex(Math.min(Math.max(index, 0), length - 1));
  };

  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (isNumber(key)) {
      changeOtpAtIndex(key, index);
      changeActiveIndex(index + 1);
    }
    switch (key) {
      case "Backspace":
        changeActiveIndex(index - 1);
        changeOtpAtIndex("", index);
        break;
      case "ArrowLeft":
        changeActiveIndex(index - 1);
        break;
      case "ArrowRight":
        changeActiveIndex(index + 1);
        break;
      default:
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);

  return (
    <span className={styles.root}>
      {otp.map((_, index) => (
        <input
          className={styles.input}
          ref={activeIndex === index ? inputRef : null}
          type="number"
          value={otp[index]}
          onKeyDown={(e) => handleKeyDown(e, index)}
          disabled={disabled}
        />
      ))}
    </span>
  );
}

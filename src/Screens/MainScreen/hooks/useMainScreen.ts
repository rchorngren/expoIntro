import { useState } from "react";

export const useMainScreen = () => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const toggleShowPassword = () => {
    setHidePassword(!hidePassword);
  };

  return { buttonPressed, setButtonPressed, hidePassword, setHidePassword };
};

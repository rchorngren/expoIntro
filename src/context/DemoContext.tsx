import React, { useState } from "react";

interface IDemoContext {
  simpleText: string;
  setSimpleText: (text: string) => void;
  anotherText: string;
  setAnotherText: (text: string) => void;
}

export const DemoContext = React.createContext<IDemoContext | undefined>(
  undefined
);

export const DemoContextProvider: React.FC = (props) => {
  const [simpleText, setSimpleText] = useState<string>("");
  const [anotherText, setAnotherText] = useState<string>("");

  return (
    <DemoContext.Provider
      value={{
        simpleText: simpleText,
        setSimpleText: setSimpleText,
        anotherText: anotherText,
        setAnotherText: setAnotherText,
      }}
    >
      {props.children}
    </DemoContext.Provider>
  );
};

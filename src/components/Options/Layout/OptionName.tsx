import React from "react";
import { Heading } from "@chakra-ui/react";

interface IOptionNameProps {
  text: string;
}

function OptionName({ text }: IOptionNameProps) {
  const beforeStyle = {
    position: "absolute",
    left: 0,
    bottom: 0,
    content: '""',
    height: "6px",
    width: "50px",
    background: "gray.400",
  };

  const afterStyle = {
    position: "absolute",
    left: 0,
    bottom: 0,
    content: '""',
    height: "1px",
    width: "100%",
    background: "gray.400",
  };
  return (
    <Heading
      position={"relative"}
      as={"h3"}
      fontSize={"2xl"}
      _before={beforeStyle}
      _after={afterStyle}
      marginBottom={6}
      paddingBottom={3}
    >
      {text}
    </Heading>
  );
}

export default OptionName;

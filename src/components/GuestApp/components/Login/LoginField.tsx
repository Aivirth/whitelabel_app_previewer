import {
  Box,
  Flex,
  Text,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import styles from "./LoginField.module.css";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { RiLockPasswordLine as PswIcon } from "react-icons/ri";

interface ILoginField {
  type: string;
  name: string;
  text?: string;
}

interface IFormField {
  type: string;
  name: string;
  className: string;
}

interface IFieldIcon {
  type: string;
}

const FieldIcon = ({ type }: IFieldIcon) => {
  const icon = type === "user" ? <UserIcon /> : <PswIcon />;

  return (
    <Box
      position="absolute"
      fontSize={"2rem"}
      right={0}
      translateY={"calc(-100% - 10px)"}
      transform="auto"
      marginRight="1%"
    >
      {icon}
    </Box>
  );
};

const FormField = ({ type, name, className }: IFormField) => {
  return (
    <input
      type="input"
      className={className}
      name={name}
      id={name}
      //position={'absolute'}
      required={true}
      placeholder="silence is golden"
    />
  );
};

const LoginField = ({
  type,
  name,
  text = "Placeholder Label",
}: ILoginField) => {
  const loginFieldId = name + uuidv4();

  return (
    <FormControl className={styles.form__group + " field"} width="70%">
      <FormField
        type="user"
        name={loginFieldId}
        className={styles.form__field}
      />
      <FormLabel htmlFor={loginFieldId} className={styles.form__label}>
        {text}
      </FormLabel>
      <FieldIcon type={type} />
    </FormControl>
  );
};

export default LoginField;

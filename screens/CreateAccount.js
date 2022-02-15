import React, { useContext } from "react";
import { Text, Button } from "react-native";

import ScreenContainer from "./ScreenContainer";
import { AuthContext } from "../context/context";

const CreateAccount = () => {
  const { signUp } = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};

export default CreateAccount;

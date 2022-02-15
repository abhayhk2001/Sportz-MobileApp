import React, { useContext } from "react";
import { Text, Button } from "react-native";

import ScreenContainer from "./ScreenContainer";
import { AuthContext } from "../context/context";

const SignIn = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
    </ScreenContainer>
  );
};
export default SignIn;

import React, { useContext } from "react";
import { Text, Button } from "react-native";

import ScreenContainer from "./ScreenContainer";
import { AuthContext } from "../context/context";

const Profile = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export default Profile;

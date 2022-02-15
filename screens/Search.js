import React from "react";
import { Text, Button } from "react-native";

import ScreenContainer from "./ScreenContainer";

const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button
      title="React Native School"
      onPress={() => {
        navigation.navigate("HomeStack", {
          screen: "Details",
          params: { name: "React Native School" },
        });
      }}
    />
  </ScreenContainer>
);

export default Search;

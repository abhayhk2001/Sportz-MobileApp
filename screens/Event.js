import React from "react";
import { Text } from "react-native";

import ScreenContainer from "./ScreenContainer";

const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);
export default Details;

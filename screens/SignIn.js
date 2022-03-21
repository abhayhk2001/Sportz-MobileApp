import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Input,
  Icon,
  Stack,
  Button,
  NativeBaseProvider,
  Radio,
  Box,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../context/context";
import Svg, { Path } from "react-native-svg";

const SignIn = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const handleClick = () => setShow(!show);

  const LogUserIn = () => {
    const url = "https://8d7a-49-37-183-94.in.ngrok.io/api/" + user + "/login";
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          signIn(res.user);
        } else {
          setLoginError(true);
        }
      });
  };
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, backgroundColor: "#E8F6EF" }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={480}
          height={207}
          fill="none"
        >
          <Path
            fill="#89E3FF"
            d="M-376 25.584h18.938c18.937 0 56.812 0 94.687 25.585 37.875 25.584 75.75 76.753 113.625 89.546 37.875 12.792 75.75-12.793 113.625-38.377C2.75 76.753 40.625 51.168 78.5 38.377c37.875-12.793 75.75-12.793 113.625 4.264C230 59.697 267.875 93.81 305.75 127.922c37.875 34.113 75.75 68.226 113.625 76.754 37.875 8.528 75.75-8.528 94.687-17.057L533 179.091V0h-909v25.584z"
          />
        </Svg>
        <Stack mt="19" w="100%" alignItems="center">
          <View style={styles.viewContainer}>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={user}
              onChange={(nextValue) => {
                setLoginError(false);
                setUser(nextValue);
              }}
              defaultValue="student"
            >
              <View style={styles.selectuser}>
                <View style={{ marginHorizontal: 25 }}>
                  <Radio value="student">
                    <Text style={{ marginLeft: 10 }}>Student</Text>
                  </Radio>
                </View>
                <View style={{ marginHorizontal: 25 }}>
                  <Radio value="faculty">
                    <Text style={{ marginLeft: 10 }}>Faculty</Text>
                  </Radio>
                </View>
              </View>
            </Radio.Group>
            <Input
              autoCapitalize="none"
              mb="7"
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              onPressIn={() => {
                setLoginError(false);
              }}
              value={username}
              onChangeText={(text) => {
                setUsername(text);
              }}
              placeholder="Username"
            />
            <Input
              type={show ? "text" : "password"}
              w={{
                base: "75%",
                md: "25%",
              }}
              onPressIn={() => {
                setLoginError(false);
              }}
              InputRightElement={
                <Button
                  size="xs"
                  rounded="none"
                  w="1/5"
                  h="full"
                  onPress={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              }
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              placeholder="Password"
            />
            <Box mt="10" alignItems="center">
              <Button
                onPress={() => {
                  LogUserIn();
                }}
              >
                Sign In
              </Button>
            </Box>
          </View>
          {loginError ? <Text>Worng Username or Password</Text> : <></>}
        </Stack>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    borderRadius: 5,
    borderWidth: 2,
    paddingTop: 15,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderRadius: 60,
    borderColor: "#FFC34A",
  },
  selectuser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
  },
});

export default SignIn;

import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/context";
import { NativeBaseProvider, Button } from "native-base";

export default Profile = () => {
  const { getToken, signOut } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    setIsLoading(true);
    fetch("https://8d7a-49-37-183-94.in.ngrok.io/api/faculty/facultyinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: "faculty-sudha123",
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setUser(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);
  dept = {
    CSE: "Computer Science and Engineering",
  };
  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={require("../assets/istockphoto-522855255-612x612.jpg")}
        />
        <View style={styles.container}>
          {!isLoading ? (
            <Text>
              Username : {user.username + "\n\n"}
              Name : {user.name + "\n\n"}
              Department : {dept[user.dept] + "\n\n"}
            </Text>
          ) : (
            <></>
          )}
          <Button
            style={{ width: "50%" }}
            onPress={() => {
              signOut();
            }}
          >
            Change Name
          </Button>
          <Button
            style={{ width: "50%" }}
            onPress={() => {
              signOut();
            }}
          >
            Change Password
          </Button>
          <Button
            style={{ width: "50%" }}
            onPress={() => {
              signOut();
            }}
          >
            Sign Out
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 100,
    marginBottom: 75,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf: "center",
    position: "absolute",
    marginBottom: 10,
    marginTop: 35,
  },
  name: {
    fontSize: 22,
    color: "#red",
    fontWeight: "600",
  },
  body: {
    marginTop: 20,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});

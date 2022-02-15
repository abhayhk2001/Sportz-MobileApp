import React, { useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthContext } from "./context/context";

import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash,
} from "./screens/allScreens";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    {/* <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    /> */}
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const NewScreen = () => (
  <Tabs.Navigator screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="HomeStack" component={HomeStackScreen} />
    <Tabs.Screen name="SearchStack" component={SearchStackScreen} />
    <Tabs.Screen name="ProfileStack" component={ProfileStackScreen} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={NewScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
// const ProfileStack = createStackNavigator();
// const ProfileStackScreen = () => (
//   <ProfileStack.Navigator>
//     <ProfileStack.Screen name="Profile" component={Profile} />
//   </ProfileStack.Navigator>
// );

// const TabsScreen = () => (
//   <Tabs.Navigator>
//     <Tabs.Screen name="Home" component={HomeStackScreen} />
//     <Tabs.Screen name="Search" component={SearchStackScreen} />
//   </Tabs.Navigator>
// );

// const Drawer = createDrawerNavigator();
// const DrawerScreen = () => (
//   <Drawer.Navigator initialRouteName="Profile">
//     <Drawer.Screen name="Home" component={TabsScreen} />
//     <Drawer.Screen name="Profile" component={ProfileStackScreen} />
//   </Drawer.Navigator>
// );

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../home-stack/homeScreen";
import NotificationScreen from "../home-stack/notificationScreen";
import RoomsScreen from "../home-stack/roomsScreen";
import DeviceScreen from "../home-stack/deviceScreen";

const HomeStack = createStackNavigator();

export default function HomeNavGraph() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Notifications" component={NotificationScreen} />
      <HomeStack.Screen name="Rooms" component={RoomsScreen} />
      <HomeStack.Screen name="Devices" component={DeviceScreen} />
    </HomeStack.Navigator>
  );
}

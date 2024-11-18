import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import CommonToolbar from "../common/commonToolbar";
import CommonImageCard from "../common/commonImageCard";
import CommonDeviceControl from "../common/commonDeviceControl";

const ROOMS = [
  {
    name: "Bed Room",
    count: "5 devices",
    image: require("../../assets/images/home_setup/home-setup.png"),
  },
  {
    name: "Living Room",
    count: "2 devices",
    image: require("../../assets/images/home_setup/home-setup.png"),
  },
  {
    name: "Study Room",
    count: "1 device",
    image: require("../../assets/images/home_setup/home-setup.png"),
  },
  {
    name: "Guest Room",
    count: "2 devices",
    image: require("../../assets/images/home_setup/home-setup.png"),
  },
];

export default function HomeScreen({ navigation }: any) {
  const [airConditionOn, setAirConditionOn] = useState(true);
  const [ceilingFanOn, setCeilingFanOn] = useState(false);

  const toggleDeviceState = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    return () => setState((prevState) => !prevState);
  };

  const handleNotificationIconPress = () => {
    navigation.navigate("Notifications");
  };

  const handleSeeAllRooms = () => {
    navigation.navigate("Rooms");
  };

  const handleSeeAllDevices = () => {
    navigation.navigate("Devices");
  };

  return (
    <View className="flex-1">
      <CommonToolbar
        toolbarStyle="flex p-4 items-end"
        showLeadingIcon={false}
        showTrailingIcon={true}
        trailingIcon="notifications-none"
        handleTrailingIconPressed={handleNotificationIconPress}
      />

      <ScrollView
        className="flex-1 px-3"
        overScrollMode="never"
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile section*/}
        <View className="flex-row items-center mb-5">
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            className="w-14 h-14 rounded-full mr-4"
          />
          <View>
            <Text className="text-2xl font-bold">Hi, Tomas</Text>
            <Text className="text-gray-500">
              Welcome back to your smart home.
            </Text>
          </View>
        </View>

        {/* My Rooms Section */}
        <View className="my-5">
          <View className="flex-row w-full justify-between">
            <Text className="font-bold text-lg">My Rooms</Text>
            <TouchableOpacity onPress={handleSeeAllRooms}>
              <Text className="text-blue-500">See All</Text>
            </TouchableOpacity>
            {/* <CommonButton
              onPress={handleAddNewRoomPress}
              text="Add New"
              buttonStyles="flex-row bg-gray-200 rounded-full items-center space-x-2 px-3 py-2"
              textStyles="text-xs text-black font-medium"
              showTrailingIcon={true}
              trailingIconName="add-circle"
              trailingIconColorName="rgb(59 130 246)"
              trailingIconSize={24}
            /> */}
          </View>

          <View className="flex-row flex-wrap my-3 justify-between">
            {ROOMS.map((room, index) => (
              <CommonImageCard
                key={index}
                image={room.image}
                roomName={room.name}
                roomCount={room.count}
                imageStyles="w-44 h-36 rounded-2xl justify-end overflow-hidden m-1"
                roomNameStyles="text-base font-bold ml-4"
                roomCountStyles="text-sm text-gray-700 ml-4"
              />
            ))}
          </View>
        </View>

        {/* Frequently Used Section */}
        <View className="my-5">
          <View className="flex-row justify-between">
            <Text className="font-bold text-lg">Frequently Used</Text>
            <TouchableOpacity onPress={handleSeeAllDevices}>
              <Text className="text-blue-500">See All</Text>
            </TouchableOpacity>
          </View>

          <CommonDeviceControl
            deviceName="Air Condition"
            isChecked={airConditionOn}
            toggle={toggleDeviceState(setAirConditionOn)}
          />

          <CommonDeviceControl
            deviceName="Ceiling Fan"
            isChecked={ceilingFanOn}
            toggle={toggleDeviceState(setCeilingFanOn)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

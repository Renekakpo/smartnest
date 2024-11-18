import React from "react";
import { View, Image, Text } from "react-native";
import CommonToolbar from "../common/commonToolbar";
import CommonButton from "../common/commonButton";

export default function HomeSetupScreen() {
  const IMAGE = require("../assets/images/home_setup/home-setup.png");

  const handleBackPress = () => {
    alert("Navigate back to home");
  };

  const handleContinuePress = () => {
    alert("Guie user through google nest account!");
  };

  return (
    <View className="flex-1">
      <CommonToolbar
        title="Home Setup"
        titleStyle="text-white text-lg font-medium"
        toolbarStyle="flex-row p-7 items-center bg-blue-600"
        showLeadingIcon={false}
        showTrailingIcon={false}
      />
      <Image className="w-full" source={IMAGE} resizeMode="cover" />
      <Text className="text-black text-base font-medium text-center mx-4 my-8">
        You've set up your account. Now set up your home.
      </Text>
      <Text className="text-gray-500 text-ms font-light text-center mx-8">
        Adding a new home to your Google Nest Account is the first step in
        bringing your products together in one place.
      </Text>
      <CommonButton
        onPress={handleContinuePress}
        text="Continue"
        buttonStyles=" bg-blue-500 p-3 mx-8 rounded-2xl absolute bottom-10 left-0 right-0 items-center"
        textStyles="text-base text-white font-bold"
      />
    </View>
  );
}

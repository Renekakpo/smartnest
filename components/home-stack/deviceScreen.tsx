import React from "react";
import { View, Text } from "react-native";
import CommonToolbar from "../common/commonToolbar";

export default function DeviceScreen({ navigation }: any) {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <CommonToolbar
        title="Devices"
        titleStyle="text-black text-xl font-bold"
        toolbarStyle="flex-row bg-white p-4 items-center justify-between"
        showLeadingIcon={true}
        showTrailingIcon={false}
        leadingIcon="arrow-back-ios"
        handleLeadingIconPressed={handleBackPress}
      />
    </View>
  );
}

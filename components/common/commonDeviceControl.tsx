import React from "react";
import { CommonDeviceControlProps } from "@/interfaces/commonDeviceControlProps";
import { View, Text } from "react-native";
import CommonVerticalSwitch from "./commonVerticalSwitch";

const CommonDeviceControl: React.FC<CommonDeviceControlProps> = ({
  deviceName,
  isChecked,
  toggle,
}) => {
  return (
    <View
      className={`flex-row justify-between ${
        !isChecked ? "bg-blue-500" : "bg-gray-200/70"
      } rounded-xl p-5 my-2`}
    >
      <View className="flex-auto">
        <Text
          className={`text-base ${
            !isChecked ? "text-white" : "text-black"
          } font-bold`}
        >
          {deviceName}
        </Text>
        <Text
          className={`${!isChecked ? "text-white/50" : "text-black/50"} mb-4`}
        >
          {!isChecked ? "Connected" : "Disconnected"}
        </Text>
      </View>
      <CommonVerticalSwitch
        width="w-14"
        height="h-20"
        isChecked={isChecked}
        onValueChange={toggle}
        onLabel="On"
        offLabel="Off"
        textStyle="text-white font-light text-base m-0.5"
        onColor="bg-blue-600"
        offColor="bg-gray-400"
        sliderWidth={45}
        sliderHeight={30}
        slideColor="white"
        borderRadius={10}
        animationDuration={300}
      />
    </View>
  );
};
export default CommonDeviceControl;

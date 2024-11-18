import { CommonSuccessPopupProps } from "@/interfaces/commonSuccessPopupProps";
import React from "react";
import { Modal, View, Text, Image } from "react-native";
import CommonButton from "./commonButton";

const SUCCESS_POPUP_ICON = require("../../assets/images/popup/success_popup_icon.png");

const CommonSuccessPopup: React.FC<CommonSuccessPopupProps> = ({
  visible,
  onClose,
  title,
  description,
  buttonLabel,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 items-center justify-center bg-transparent">
        <View className="w-4/5 p-8 bg-white rounded-3xl items-center">
          <Image source={SUCCESS_POPUP_ICON} resizeMode="cover" />
          <Text className="text-xl text-blue-500 font-bold mt-8">{title}</Text>
          <Text className="text-nd text-gray-500 text-justify mt-3">
            {description}
          </Text>
          <CommonButton
            onPress={onClose}
            text={buttonLabel}
            buttonStyles="w-3/5 bg-blue-500 p-3 mt-8 rounded-2xl items-center justify-center"
            textStyles="text-base text-white font-semibold"
          />
        </View>
      </View>
    </Modal>
  );
};

export default CommonSuccessPopup;

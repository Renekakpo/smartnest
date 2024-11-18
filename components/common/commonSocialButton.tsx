import React from "react";
import { CommonSocialButtonProps } from "@/interfaces/commonSocialButtonProps";
import { TouchableOpacity, Image } from "react-native";

const CommonSocialButton: React.FC<CommonSocialButtonProps> = ({
  onPress,
  logo,
  buttonStyles,
}) => (
  <TouchableOpacity className={buttonStyles} onPress={onPress}>
    <Image source={logo} resizeMode="contain" />
  </TouchableOpacity>
);

export default CommonSocialButton;

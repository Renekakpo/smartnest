import { CommonButtonProps } from "@/interfaces/commonButtonProps";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CommonButton: React.FC<CommonButtonProps> = ({
  onPress,
  text,
  buttonStyles,
  textStyles,
  showTrailingIcon = false,
  trailingIconName,
  trailingIconSize,
  trailingIconColorName,
}) => (
  <TouchableOpacity className={buttonStyles} onPress={onPress}>
    {showTrailingIcon && (
      <MaterialIcons
        name={trailingIconName}
        size={trailingIconSize}
        color={trailingIconColorName}
      />
    )}
    <Text className={textStyles}>{text}</Text>
  </TouchableOpacity>
);

export default CommonButton;

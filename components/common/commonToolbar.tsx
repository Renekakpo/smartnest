import React from "react";
import { CommonToolbarProps } from "@/interfaces/commonToolbarProps";
import { View, Text } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const CommonToolbar: React.FC<CommonToolbarProps> = ({
  title = "",
  titleStyle,
  toolbarStyle,
  showLeadingIcon = true,
  leadingIcon = "",
  leadingIconColor = "",
  showTrailingIcon = false,
  trailingIcon = "",
  trailingIconColor = "",
  handleLeadingIconPressed = () => {},
  handleTrailingIconPressed = () => {},
}) => {
  return (
    <View className={toolbarStyle}>
      {showLeadingIcon && (
        <MaterialIcons
          name={leadingIcon}
          size={28}
          color={leadingIconColor}
          onPress={handleLeadingIconPressed}
        />
      )}

      {titleStyle && (
        <View className="flex-1 items-center absolute left-0 right-0">
          <Text className={titleStyle}>{title}</Text>
        </View>
      )}

      {showTrailingIcon && (
        <MaterialIcons
          name={trailingIcon}
          size={28}
          color={trailingIconColor}
          onPress={handleTrailingIconPressed}
        />
      )}
    </View>
  );
};

export default CommonToolbar;

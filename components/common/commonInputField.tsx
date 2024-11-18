import React from "react";
import { CommonInputFieldProps } from "@/interfaces/CommonInputFieldProps";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const CommonInputField: React.FC<CommonInputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  enterKeyHint = "next",
  secureTextEntry = false,
  toggleSecureTextEntry,
  showToggleIcon = false,
}) => {
  return (
    <View className="mt-4">
      <Text className="text-black text-base font-medium">{label}</Text>
      <View className="mt-2">
        <TextInput
          className="w-full border border-gray-400 rounded-xl p-3 pr-10"
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          enterKeyHint={enterKeyHint}
          secureTextEntry={secureTextEntry}
        />
        {showToggleIcon && (
          <TouchableOpacity
            className="absolute right-3 top-3"
            onPress={toggleSecureTextEntry}
          >
            <Feather
              name={secureTextEntry ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CommonInputField;

import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CommonButton from "./common/commonButton";
import CommonInputField from "./common/commonInputField";
import CommonToolbar from "./common/commonToolbar";

export default function SignInScreen() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleFormChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleBackPress = () => {
    alert("Should navigate back to previous screen!");
  };

  const onSignInClicked = () => {
    alert("Will submit user credentials for login!");
  };

  const handleForgotPassword = () => {
    alert("Will guide user through password recovery!");
  };

  return (
    <View className="flex-1">
      <CommonToolbar
        title="Sign In"
        titleStyle="text-white text-lg font-medium"
        toolbarStyle="flex-row p-4 items-center"
        showLeadingIcon={true}
        showTrailingIcon={false}
        leadingIcon="left"
        leadingIconColor="black"
        handleLeadingIconPressed={handleBackPress}
      />

      <View className="flex-1 px-8 top-20">
        <Text className="text-black text-2xl font-medium">Sign In</Text>
        <Text className="text-gray-400 text-ms font-normal">
          Enter your email and password to get into the app!
        </Text>

        <CommonInputField
          label="Email"
          value={form.email}
          onChangeText={(value) => handleFormChange("email", value)}
          placeholder="Enter your email..."
          keyboardType="email-address"
        />
        <CommonInputField
          label="Password"
          value={form.password}
          onChangeText={(value) => handleFormChange("password", value)}
          placeholder="Enter your password..."
          secureTextEntry={!showPassword}
          toggleSecureTextEntry={() => setShowPassword(!showPassword)}
          showToggleIcon={true}
        />
        <TouchableOpacity onPress={handleForgotPassword} className="self-end">
          <Text className="text-red-500 pt-2 underline">Forgot password?</Text>
        </TouchableOpacity>
        <CommonButton
          onPress={onSignInClicked}
          text="Sign In"
          buttonStyles="w-full bg-blue-500 p-3 mt-8 rounded-2xl items-center justify-center"
          textStyles="text-base text-white font-bold"
        />
      </View>
    </View>
  );
}

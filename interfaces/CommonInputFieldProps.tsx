import { EnterKeyHintTypeOptions, KeyboardTypeOptions } from "react-native";

export interface CommonInputFieldProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  enterKeyHint?: EnterKeyHintTypeOptions;
  secureTextEntry?: boolean;
  toggleSecureTextEntry?: () => void;
  showToggleIcon?: boolean;
}

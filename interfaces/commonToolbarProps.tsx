import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { Key } from "react";

export interface CommonToolbarProps {
  title?: string;
  titleStyle?: string;
  toolbarStyle: string;
  showLeadingIcon: boolean;
  leadingIcon?: any;
  leadingIconColor?: string;
  showTrailingIcon: boolean;
  trailingIcon?: any;
  trailingIconColor?: string;
  handleLeadingIconPressed?: () => void;
  handleTrailingIconPressed?: () => void;
}

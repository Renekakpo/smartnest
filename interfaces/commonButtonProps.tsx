export interface CommonButtonProps {
  text: string;
  buttonStyles: string;
  textStyles: string;
  showTrailingIcon?: boolean;
  trailingIconName?: any;
  trailingIconColorName?: string;
  trailingIconSize?: number;
  onPress: () => void;
}

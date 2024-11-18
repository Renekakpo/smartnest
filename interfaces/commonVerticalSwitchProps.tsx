export interface CommonVerticalSwitchProps {
  width: string;
  height: string;
  isChecked: boolean;
  onValueChange: (value: boolean) => void;
  onLabel: string;
  offLabel: string;
  textStyle: string;
  onColor: string;
  offColor: string;
  sliderWidth: number;
  sliderHeight: number;
  slideColor: string;
  borderRadius: number;
  animationDuration: number;
  disable?: boolean;
}

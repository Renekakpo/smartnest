export interface CommonDeviceControlProps {
  deviceName: string;
  isChecked: boolean;
  toggle: (value: boolean) => void;
}

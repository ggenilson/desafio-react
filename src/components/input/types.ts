export type inputProps = {
  id?: string;
  className?: string;
  type?: any;
  ref?: any;
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
  isValid?: boolean;
  style?: object;
  onBlur?: (val: any) => void;
  onChange?: (val: any) => void;
  onChangeText?: (val: any) => void;
  onClick?: () => void;
};

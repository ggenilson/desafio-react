export type inputProps = {
  id?: string;
  className?: string;
  type?: any;
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
  isValid?: boolean;
  style?: object;
  onChange?: (val: any) => void;
  onClick?: () => void;
};

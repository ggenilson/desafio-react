import { FC } from 'react';
import { inputProps } from '../types';

const Button: FC<inputProps> = ({ type, ...restProps }) => {
  const Input = () => (
    <div className="input-button-container">
      <button type={type} {...restProps}>
        {restProps?.value}
      </button>
    </div>
  );

  return <Input />;
};

export default Button;

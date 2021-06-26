import { FC } from 'react';
import { inputProps } from '../types';

const Button: FC<inputProps> = ({
  type,
  className = '',
  value = '',
  ...restProps
}) => {
  const Input = () => (
    <div className={`${className} input-button-container`}>
      <button type={type} {...restProps}>
        {value}
      </button>
    </div>
  );

  return <Input />;
};

export default Button;

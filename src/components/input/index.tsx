import { FC } from 'react';
import { inputProps } from './types';
import Button from './button';
import OtherInput from './others';

const basics = ['text', 'password', 'email'];
const buttonsType = ['button', 'submit', 'reset'];

const Input: FC<inputProps> = ({
  type,
  className = '',
  isValid = '',
  label,
  ...restProps
}) => {
  if (!type) {
    return <label>Esperava receber um "type"!</label>;
  }

  const Render = () => (
    <>
      {basics.indexOf(type) > -1 ? (
        <OtherInput
          {...restProps}
          type={type}
          label={label}
          className={`${className} ${isValid ? 'good' : 'bad'}`}
        />
      ) : buttonsType.indexOf(type) > -1 ? (
        <Button {...restProps} type={type} className={className} />
      ) : (
        <></>
      )}
    </>
  );

  return <Render />;
};

export default Input;

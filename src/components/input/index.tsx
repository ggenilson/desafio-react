import { FC } from 'react';
import { inputProps } from './types';
import Button from './button';
import OtherInput from './others';

const basics = ['text', 'password', 'email'];
const buttonsType = ['button', 'submit', 'reset'];

const Input: FC<inputProps> = ({ type, className, label, ...restProps }) => {
  if (!type) {
    return <label>Esperava receber um "type"!</label>;
  }

  const Render = () => (
    <>
      {basics.indexOf(type) > -1 ? (
        <OtherInput
          type={type}
          label={label}
          {...restProps}
          className={className}
        />
      ) : buttonsType.indexOf(type) > -1 ? (
        <Button type={type} {...restProps} />
      ) : (
        <></>
      )}
    </>
  );

  return <Render />;
};

export default Input;

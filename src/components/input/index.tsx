import { FC, useState } from 'react';
import { inputProps } from './types';
import Button from './button';

const basics = ['text', 'password', 'email'];
const buttonsType = ['button', 'submit', 'reset'];

const Input: FC<inputProps> = ({
  type,
  className = '',
  isValid = '',
  onChange = () => {},
  label,
  ...restProps
}) => {
  const [data, setData] = useState('');

  if (!type) {
    return <label>Esperava receber um "type"!</label>;
  }

  const Render = () => (
    <>
      {basics.indexOf(type) > -1 ? (
        <div className="input-container inputWithIcon inputIconBg">
          <input
            type={type}
            {...restProps}
            className={`form-input ${className && className} ${
              isValid ? 'good' : 'bad'
            }`}
            placeholder=" "
            onChange={e => {
              onChange(e);
              // setData(e.target.value);
            }}
          />
          <label htmlFor={`${restProps.id}`} className="form-label">
            {label}
          </label>
          <i className="fa fa-check" />
        </div>
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

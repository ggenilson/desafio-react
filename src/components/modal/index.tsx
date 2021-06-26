import { FC } from 'react';
import { ModalProps } from './types';
import Input from '../../components/input';

const Modal: FC<ModalProps> = ({
  Component,
  toggle,
  setToggle,
  className,
  onSaveClick = () => {},
}) => (
  <>
    {toggle && (
      <div id="modalContainer" className="modal-container show">
        <div className={`modal ${className || ''}`}>
          {Component && <div className="content-modal">{Component}</div>}

          <div className="modal-footer">
            <Input
              type="button"
              value="FECHAR"
              className="close-modal-button"
              onClick={() => {
                setToggle(false);
                onSaveClick();
              }}
            />
          </div>
        </div>
      </div>
    )}
  </>
);

export default Modal;

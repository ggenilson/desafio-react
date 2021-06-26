import { FC } from 'react';
import { ModalProps } from './types';

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
          <button className="close-modal" onClick={() => setToggle(false)}>
            x
          </button>
          {Component && <div className="content-modal">{Component}</div>}

          <div className="modal-footer">
            <button
              className="modal-save"
              onClick={() => {
                setToggle(false);
                onSaveClick();
              }}
            >
              Concluír
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);

export default Modal;

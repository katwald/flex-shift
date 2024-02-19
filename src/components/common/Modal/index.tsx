import React, { ReactNode } from "react";

type ModalProps = {
  title?: string;
  children?: ReactNode;
  setShowModal: (value: boolean) => void;
};

import "./Modal.scss";

const Modal: React.FC<ModalProps> = ({ title, children, setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div></div>
          <h1 className="modal-title">{title}</h1>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

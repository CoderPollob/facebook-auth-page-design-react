import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";

const Modal = ({ children, hide }) => {
  return (
    <div className="modal-blur-area">
      <div className="modal-container">
        <div className="modal-header">
          <div className="header-content">
            <h2> Sing Up</h2>
            <p>Its Quick and Easy</p>
          </div>
          <button onClick={() => hide(false)}>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body"> {children}</div>
      </div>
    </div>
  );
};

export default Modal;

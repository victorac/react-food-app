import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  onDismiss(): void;
  show?: boolean;
}

const Modal: React.FC<Props> = ({ children, className, onDismiss, show = true }) => {
  return (
    <>
      {show &&
        ReactDOM.createPortal(
          <div className={`${classes.backdrop}`} onClick={onDismiss}></div>,
          document.getElementById("backdrop-root")!
        )}
      {show &&
        ReactDOM.createPortal(
          <div className={`${classes.modal} ${className}`}>{children}</div>,
          document.getElementById("modal-root")!
        )}
    </>
  );
};

export default Modal;

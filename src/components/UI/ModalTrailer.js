import ReactDOM from "react-dom";
import React from "react";

import styles from "./ModalTrailer.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideTrailer} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const ModalTrailer = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideTrailer={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default ModalTrailer;

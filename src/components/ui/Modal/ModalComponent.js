import React from "react";
import Loader, { IconLoader } from "../Loader";

export const ModalComponent = (props) => {

  return (
    <div className={`modal is-active`}>
      <div className="modal-background"></div>
      <IconLoader></IconLoader>
    </div>
  );
};

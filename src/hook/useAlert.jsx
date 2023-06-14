"use_client";
import React, { useMemo, useState } from "react";
import AhiLlegoError from "@/common/error/handler";
import AlertDialog from "@/components/common/AlertDialog";

const initialOptions = {
  title: "Ahí-Llego!",
  message: "Tuvimos un inconveniente, por favor vuelve a intentarlo",
  type: "warning",
  icon: "/images/alert/warning.png",
  onOkClick: () => {},
  onOkCancel: () => {},
  ex: null,
};

const icons = {
  success: "/images/alert/success.png",
  warning: "/images/alert/warning.png",
  error: "/images/alert/error.png",
  confirm: "/images/alert/error.png",
};

const useAlert = (props) => {
  const [open, setOpen] = useState(false);
  const [titleAlert, setTitleAlert] = useState(initialOptions.title);
  const [messageAlert, setMessageAlert] = useState(initialOptions.message);
  const [typeAlert, setTypeAlert] = useState(initialOptions.type); //type: success-warning-error
  const [iconAlert, setIconAlert] = useState(initialOptions.icon);
  const [functionOnOkClick, setFunctionOnOkClick] = useState(() => {});

  const handlerError = (ex) => {
    if (ex && ex instanceof AhiLlegoError) {
      return ex.messageUser;
    }
    return initialOptions.message;
  };

  const onShowAlert = (options = initialOptions) => {
    let { title, message, type } = options;
    let titleR = title ? title : initialOptions.title;
    let messageR = message ? message : options.message;
    let typeR = type ? type : initialOptions.type;
    let iconR = handlerIcon(typeR);
    if (options.ex) {
      messageR = handlerError(options.ex);
    }
    setIconAlert(iconR);
    setTitleAlert(titleR);
    setMessageAlert(messageR);
    setTypeAlert(typeR);
    setOpen(true);

    if (options.onOkClick && typeof options.onOkClick === "function") {
      setFunctionOnOkClick(() => options.onOkClick);
    }
  };

  const handlerIcon = (typeAction) => {
    if (typeAction) {
      let iconResult = icons[typeAction];
      return iconResult || initialOptions.icon;
    } else {
      return initialOptions.icon;
    }
  };

  const handletOnOkClick = () => {
    if (typeof functionOnOkClick === "function") {
      functionOnOkClick();
    }
    setOpen(false);
    setTitleAlert(initialOptions.title);
    setMessageAlert(initialOptions.message);
    setTypeAlert(initialOptions.type);
  };

  const onHideAlert = () => {
    setOpen(false);
    setTitleAlert(initialOptions.title);
    setMessageAlert(initialOptions.message);
    setTypeAlert(initialOptions.type);
  };

  const ModalAlert = useMemo(() => {
    return () =>
      open && (
        <AlertDialog
          img={iconAlert}
          type={typeAlert}
          title={titleAlert}
          body={messageAlert}
          isOpen={open}
          hideAlert={onHideAlert}
          onOkClick={handletOnOkClick}
          onCancelClick={onHideAlert}
        />
      );
  }, [open]);

  return [onShowAlert, onHideAlert, ModalAlert];
};

export default useAlert;

import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const AlertDialog = (props) => {
  return (
    <>
      {props.isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-md max-h-50">
            <div className="relative bg-gray-200 rounded-lg shadow">
              <div className="p-3 space-y-6 text-center">
                <div className="flex justify-center">
                  <Image src={props.img} width={100} height={100} />
                </div>
                <div className="my-1">
                  <p className="text-2xl font-sans">{props.title}</p>
                </div>
                <div>
                  <p className="text-base font-sans">{props.body}</p>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                {props.onCancelClick && (
                  <button
                    type="button"
                    onClick={props.hideAlert}
                    className="w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {props.type === "confirm" ? "CANCELAR" : "ENTENDIDO"}
                  </button>
                )}
                {props.type === "confirm" && (
                  <button
                    type="button"
                    onClick={props.onOkClick}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ACEPTAR
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

AlertDialog.defaultProps = {
  img: "/images/alert/warning.png",
  type: "warning",
  title: "Ahí-Llego!",
  body: "No se puede cambiar el estado por que el pedido ya se encuentra cancelado",
  isOpen: false,
  hideAlert: () => {},
  onOkClick: () => {},
  onCancelClick: null,
};

AlertDialog.propTypes = {
  img: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  isOpen: PropTypes.bool,
  hideAlert: PropTypes.func,
  onOkClick: PropTypes.func,
  onCancelClick: PropTypes.func,
};

export default AlertDialog;

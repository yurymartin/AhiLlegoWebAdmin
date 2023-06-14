import React, { useState } from "react";
import { format } from "date-fns";
import ModalShowOrder from "./ModalShowOrder";
import ModalChangeStatus from "./ModalChangeStatus";
import ModalTakeOrder from "./ModalTakeOrder";
const titleTable = [
  { id: 1, label: "Id" },
  { id: 3, label: "CLIENTE" },
  { id: 3, label: "REPARTIDOR" },
  { id: 3, label: "ESTADO" },
  { id: 3, label: "TIPO PAGO" },
  { id: 3, label: "EMPRESA" },
  { id: 4, label: "FECHA Y HORA" },
  { id: 3, label: "MONTO TOTAL" },
  { id: 6, label: "ACCIONES" },
];

const TableOrders = (props) => {
  const [isModalOpenShow, setIsModalOpenShow] = useState(false);
  const [isModalChangeStatus, setIsModalChangeStatus] = useState(false);
  const [isModalTakeOrder, setIsModalTakeOrder] = useState(false);
  const [orderSelectedId, setOrderSelectedId] = useState("");

  const onClickButtonShow = (orderId) => {
    setOrderSelectedId(orderId);
    onOpenModelShow();
  };

  const onOpenModelShow = () => {
    setIsModalOpenShow(true);
  };

  const onCloseModelShow = () => {
    setIsModalOpenShow(false);
  };

  const onClickButtonChangeStatus = (orderId) => {
    setOrderSelectedId(orderId);
    onOpenModelChangeStatus();
  };

  const onClickButtonTakeOrder = (orderId) => {
    setOrderSelectedId(orderId);
    onOpenModelTakeOrder();
  };

  const onOpenModelChangeStatus = () => {
    setIsModalChangeStatus(true);
  };

  const onCloseModelChangeStatus = () => {
    setIsModalChangeStatus(false);
  };

  const onOpenModelTakeOrder = () => {
    setIsModalTakeOrder(true);
  };

  const onCloseModelTakeOrder = () => {
    setIsModalTakeOrder(false);
  };

  return (
    <>
      {isModalOpenShow && (
        <ModalShowOrder
          isOpen={isModalOpenShow}
          onCloseModal={onCloseModelShow}
          orderId={orderSelectedId}
        />
      )}
      {isModalChangeStatus && (
        <ModalChangeStatus
          {...props}
          isOpen={isModalChangeStatus}
          onCloseModal={onCloseModelChangeStatus}
          orderId={orderSelectedId}
          onShowAlert={props.onShowAlert}
        />
      )}
      {isModalTakeOrder && (
        <ModalTakeOrder
          {...props}
          isOpen={isModalTakeOrder}
          onCloseModal={onCloseModelTakeOrder}
          orderId={orderSelectedId}
          onShowAlert={props.onShowAlert}
        />
      )}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-200 uppercase bg-gray-900">
            <tr>
              {titleTable.map((item, i) => (
                <th key={i} scope="col" className="px-6 py-3 text-center">
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index} className="bg-gray-700 border-b border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  {String(item._id).substring(
                    String(item._id).length - 6,
                    String(item._id).length
                  )}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  {`${item.userId.name} ${item.userId.surname}`}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  {item.deliveryManId &&
                    `${item.deliveryManId.name || ""} ${
                      item.deliveryManId.surname || ""
                    }`}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  <div
                    className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-red-100"
                    style={{ backgroundColor: item.statusOrderId.color }}
                  >
                    <div className="text-xs font-normal leading-none max-w-full flex-initial">
                      {`${item.statusOrderId.name}`}
                    </div>
                  </div>
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  {`${item.typePayId.name}`}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  {`${item.companyId.name}`}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  {format(new Date(item.createdAt), "dd/MM/yyyy HH:mm:ss")}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  {`S/. ${Number(item.amountTotal).toFixed(2)}`}
                </th>
                <td className="px-6 py-4 flex flex-row justify-center items-center place-items-center gap-x-5">
                  <button
                    onClick={() => onClickButtonShow(item._id)}
                    className="font-medium text-blue-500 hover:underline text-xs"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* <button className="font-medium text-blue-500 hover:underline text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                    </svg>
                  </button> */}
                  {item.deliveryManId ? (
                    <button
                      onClick={() => onClickButtonChangeStatus(item._id)}
                      className="font-medium text-blue-500 hover:underline text-xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => onClickButtonTakeOrder(item._id)}
                      className="font-medium text-blue-500 hover:underline text-xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {props.data.length <= 0 && (
              <tr className="bg-gray-700">
                <th
                  scope="row"
                  colSpan={9}
                  className="px-6 py-4 text-white whitespace-nowrap text-xs text-center"
                >
                  NO HAY PEDIDOS
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableOrders;

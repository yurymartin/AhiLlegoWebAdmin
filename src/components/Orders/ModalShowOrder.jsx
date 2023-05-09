import React, { useEffect, useState } from "react";
import orderService from "@/data/api/services/order";

const headerTable = [
  { id: 1, name: "PRODUCTO" },
  { id: 2, name: "PRECIO" },
  { id: 3, name: "CANTIDAD" },
  { id: 4, name: "MONTO TOTAL" },
  { id: 5, name: "COMENTARIO" },
];

const ModalShowOrder = ({ isOpen, onCloseModal, orderId }) => {
  const [order, setOrder] = useState(null);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    handleGetOrder();
  }, []);

  const handleGetOrder = async () => {
    try {
      console.log("[orderId] =>", orderId);
      let res = await orderService.getById(orderId);
      setOrder(res.order);
      setDetail(res.detail);
    } catch (error) {
      console.log(error);
    }
  };

  const RowNumber = ({ label, value, divider }) => {
    return (
      <div className={divider ? "mb-2" : "mb-0"}>
        <div
          className={`flex flex-row justify-between ${
            divider ? "mb-1" : "mb-0"
          }`}
        >
          <p className="text-gray-700 text-base">{label}</p>
          <p className="text-gray-700 text-base">
            {`S/. ${Number(value).toFixed(2)}`}
          </p>
        </div>
        {divider && <hr />}
      </div>
    );
  };

  const RowText = ({ label, value, divider }) => {
    return (
      <div className={divider ? "mb-2" : "mb-0"}>
        <div
          className={`flex flex-row justify-between ${
            divider ? "mb-1" : "mb-0"
          }`}
        >
          <p className="text-gray-700 text-base">{label}</p>
          <p className="text-gray-700 text-base">{value}</p>
        </div>
        {divider && <hr />}
      </div>
    );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-6xl max-h-full">
            <div className="relative bg-gray-200 rounded-lg shadow my-10">
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  DETALLE DEL PEDIDO
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={onCloseModal}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {order && (
                    <>
                      <div className="rounded overflow-hidden shadow-xl col-span-2 bg-white">
                        <div className="px-6 py-4">
                          <div className="font-bold text-lg mb-2">
                            ESTADO PEDIDO
                          </div>
                          <RowText
                            label="Estado"
                            value={
                              <span
                                className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                                style={{
                                  backgroundColor: `${order.statusOrderId.color}`,
                                }}
                              >
                                {order.statusOrderId.name}
                              </span>
                            }
                          />
                        </div>
                      </div>
                      <div className="rounded overflow-hidden shadow-xl col-span-1 bg-white">
                        <div className="px-6 py-4">
                          <div className="font-bold text-lg mb-2">MONTOS</div>
                          <RowNumber
                            label="Monto Productos"
                            value={order.amountProducts}
                            divider={true}
                          />
                          <RowNumber
                            label="Monto"
                            value={order.amount}
                            divider={true}
                          />
                          <RowNumber
                            label="Igv"
                            value={order.igv}
                            divider={true}
                          />
                          <RowNumber
                            label="Monto Delivery"
                            value={order.delivery}
                            divider={true}
                          />
                          <RowNumber
                            label="Monto Total"
                            value={order.amountTotal}
                            divider={true}
                          />
                        </div>
                      </div>
                      <div className="rounded overflow-hidden shadow-xl col-span-1 bg-white">
                        <div className="px-6 py-4">
                          <div className="font-bold text-lg mb-2">CLIENTE</div>
                          <RowText
                            label="Nombres y Apellidos"
                            value={`${order.userId.name} ${order.userId.surname}`}
                            divider={true}
                          />
                          <RowText
                            label="Celular"
                            value={order.userId.phone}
                            divider={true}
                          />
                          <RowText
                            label="Correo Electronico"
                            value={order.userId.email}
                            divider={true}
                          />
                        </div>
                      </div>
                      <div className="rounded overflow-hidden shadow-xl col-span-1 bg-white">
                        <div className="px-6 py-4">
                          <div className="font-bold text-lg mb-2">
                            REPARTIDOR
                          </div>
                          {order.deliveryManId && (
                            <>
                              <RowText
                                label="Número Documento"
                                value={order.deliveryManId.documentNumber}
                                divider={true}
                              />
                              <RowText
                                label="Nombres y Apellidos"
                                value={`${order.deliveryManId.name} ${order.deliveryManId.surname}`}
                                divider={true}
                              />
                              <RowText
                                label="Celular"
                                value={order.deliveryManId.phone}
                                divider={true}
                              />
                              <RowText
                                label="Correo Electronico"
                                value={order.deliveryManId.email}
                                divider={true}
                              />
                            </>
                          )}
                        </div>
                      </div>
                      <div className="rounded overflow-hidden shadow-xl col-span-1 bg-white">
                        <div className="px-6 py-4">
                          <div className="font-bold text-lg mb-2">CLIENTE</div>
                          <RowText
                            label="Nombres y Apellidos"
                            value={`${order.userId.name} ${order.userId.surname}`}
                            divider={true}
                          />
                          <RowText
                            label="Celular"
                            value={order.userId.phone}
                            divider={true}
                          />
                          <RowText
                            label="Correo Electronico"
                            value={order.userId.email}
                            divider={true}
                          />
                        </div>
                      </div>
                      <div className="rounded overflow-hidden shadow-xl col-span-1 bg-white">
                        <div className="px-6 py-4">
                          <div className="font-bold text-lg mb-2">EMPRESA</div>
                          <RowText
                            label="Nombre"
                            value={order.companyId.name}
                            divider={true}
                          />
                          <RowText
                            label="Ruc"
                            value={order.companyId.ruc}
                            divider={true}
                          />
                        </div>
                      </div>
                      <div className="rounded overflow-hidden shadow-xl col-span-1 bg-white">
                        <div className="px-6 py-4">
                          <div className="font-bold text-lg mb-2">
                            TIPO DE PAGO
                          </div>
                          <RowText
                            label="Nombre"
                            value={order.typePayId.name}
                            divider={true}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="rounded overflow-hidden shadow-xl col-span-1 bg-white">
                  <div className="px-6 py-4">
                    <div className="font-bold text-lg mb-2">
                      LISTADO DE PRODUCTOS
                    </div>
                    {detail && (
                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                  <tr>
                                    {headerTable.map((item, index) => (
                                      <th scope="col" className="px-6 py-4">
                                        {item.name}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {detail.map((item, index) => (
                                    <tr className="border-b dark:border-neutral-500">
                                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                                        {item.productId.name}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {item.price}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {item.quantity}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {item.amount}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {item.comment}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={onCloseModal}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  ENTENDIDO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalShowOrder;

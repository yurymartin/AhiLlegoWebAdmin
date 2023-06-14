import React, { useEffect, useState } from "react";
import orderService from "@/data/api/services/order";
import userService from "@/data/api/services/user";

const ModalTakeOrder = (props) => {
  const [deliveriesMan, setDeliveriesMan] = useState([]);
  const [deliveryManId, setDeliveryManId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDeliveriesMan();
  }, []);

  const getDeliveriesMan = async () => {
    try {
      let res = await userService.getAllDeliveriesMan();
      setDeliveriesMan(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickChangeStatus = async () => {
    try {
      setIsLoading(true);
      const body = {
        deliveryManId: deliveryManId,
        orderId: props.orderId,
      };
      let res = await orderService.takeOrder(body);
      props.onShowAlert({
        type: "success",
        message: "cambio de estado exitosamente",
      });
      props.handleGetOrders();
    } catch (ex) {
      props.onShowAlert({ ex: ex });
    } finally {
      props.onCloseModal();
      setIsLoading(false);
    }
  };

  const onChangeDeliveryMan = (event) => {
    event.preventDefault();
    setDeliveryManId(event.target.value);
  };

  const disabledButton = () => {
    if (
      !deliveryManId ||
      deliveryManId.length <= 0 ||
      deliveryManId <= 0 ||
      isLoading
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      {props.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-gray-200 rounded-lg shadow">
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Tomar el pedido
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={props.onCloseModal}
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
                  <>
                    <div className="rounded overflow-hidden shadow-xl col-span-2 bg-white">
                      <div className="px-6 py-4">
                        <label
                          for="countries"
                          className="block mb-4 text-sm font-medium text-gray-900"
                        >
                          Repartidor
                        </label>
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          onChange={onChangeDeliveryMan}
                        >
                          <option selected value="0">
                            Seleccionar al repartidor
                          </option>
                          {deliveriesMan &&
                            deliveriesMan.length > 0 &&
                            deliveriesMan.map((item, i) => (
                              <option key={i} value={item._id}>
                                {`${item.name} ${item.surname} - ${item.documentNumber}`}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={onClickChangeStatus}
                  disabled={disabledButton()}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  ASIGNAR PEDIDO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTakeOrder;

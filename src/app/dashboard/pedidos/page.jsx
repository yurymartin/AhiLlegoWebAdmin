"use client";
import React, { useEffect, useState } from "react";
import FiltersOrders from "@/components/Orders/FiltersOrders";
import TableOrders from "@/components/Orders/TableOrders";
import orderService from "@/data/api/services/order";
import useAlert from "@/hook/useAlert";

const filtersI = {
  statusOrderId: null,
  deliveryManId: null,
  companyId: null,
  createdAtStart: null,
  createdAtEnd: null,
  // createdAtEnd: "2023-04-24",
};

const OrdersPage = () => {
  const [onShowAlert, onHideAlert, ModalAlert] = useAlert();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetOrders();
  }, []);

  const handleGetOrders = async (filtersParams = filtersI) => {
    try {
      showLoader();
      let filters = filtersParams;
      let res = await orderService.findByFilters(filters);
      setOrders(res);
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader();
    }
  };

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return (
    <>
      <br />
      <h1 className="mb-5 text-2xl font-sans font-bold ml-1">
        Listado de pedidos
      </h1>
      <FiltersOrders
        handleGetOrders={handleGetOrders}
        loading={loading}
        showLoader={showLoader}
        hideLoader={hideLoader}
        onShowAlert={onShowAlert}
      />
      <br />
      <TableOrders
        data={orders}
        handleGetOrders={handleGetOrders}
        loading={loading}
        showLoader={showLoader}
        hideLoader={hideLoader}
        onShowAlert={onShowAlert}
      />
      <ModalAlert />
    </>
  );
};

export default OrdersPage;

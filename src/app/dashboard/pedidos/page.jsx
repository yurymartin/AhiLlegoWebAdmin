"use client";
import React, { useEffect, useState } from "react";
import FiltersOrders from "@/components/Orders/FiltersOrders";
import TableOrders from "@/components/Orders/TableOrders";
import orderService from "@/data/api/services/order";
import TooltipButton from "@/components/common/TooltipButton";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    handleGetOrders();
  }, []);

  const handleGetOrders = async () => {
    try {
      let filters = {
        statusOrderId: null,
        deliveryManId: null,
        companyId: null,
        createdAtStart: null,
        createdAtEnd: null,
        // createdAtEnd: "2023-04-24",
      };
      let res = await orderService.findByFilters(filters);
      console.log(JSON.stringify(res));
      setOrders(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="mb-5 text-2xl font-sans font-bold ml-1">
        Listado de pedidos
      </h1>
      <FiltersOrders />
      <br />
      {orders && orders.length > 0 && (
        <TableOrders data={orders} handleGetOrders={handleGetOrders} />
      )}
    </>
  );
};

export default OrdersPage;

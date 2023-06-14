import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import InputText from "@/components/common/InputText";
import ButtonSubmit from "../common/ButtonSubmit";
// import InputDatePicker from "../common/InputDatePicker";
import InputSelect from "../common/InputSelect";
import statusOrderService from "@/data/api/services/statusOrder";

const FiltersOrders = (props) => {
  const [statusOrderId, setStatusOrderId] = useState("");
  const [listStatusOrders, setListStatusOrders] = useState([]);

  useEffect(() => {
    handlerGetData();
  }, []);

  const handlerGetData = async () => {
    try {
      const res = await statusOrderService.getAll();
      setListStatusOrders(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleOnSubmit = async (event) => {
    try {
      event.preventDefault();
      const filters = {
        statusOrderId: statusOrderId,
        deliveryManId: null,
        companyId: null,
        createdAtStart: null,
        createdAtEnd: null,
      };
      setStatusOrderId("");
      await props.handleGetOrders(filters);
    } catch (ex) {
      console.log(ex);
    }
  };

  const onChangeStatusOrderId = (value) => {
    setStatusOrderId(value);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="p-4 text-xs text-gray-200 uppercase bg-gray-700">
        <form onSubmit={handleOnSubmit}>
          <div className="grid gap-6 mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
            {/* <InputText placeholder="Nombre" /> */}
            <InputSelect
              value={statusOrderId}
              placeholder="seleccionar estado"
              onChange={onChangeStatusOrderId}
              options={listStatusOrders}
            />
            {/* <InputDatePicker /> */}
            <ButtonSubmit
              label="BUSCAR"
              style="h-9.5 mt-1.5"
              isLoading={props.loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

FiltersOrders.defaultProps = {
  handleGetOrders: () => {},
  loading: false,
  showLoader: () => {},
  hideLoader: () => {},
};

FiltersOrders.propTypes = {
  handleGetOrders: PropTypes.func,
  loading: PropTypes.bool,
  showLoader: PropTypes.func,
  hideLoader: PropTypes.func,
};

export default FiltersOrders;

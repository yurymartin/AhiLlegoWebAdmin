export const colors = {
  primary: "#4169E1",
  secondy: "#ff0000",
  dark: "#4A4B4D",
  black: "#000000",
  backgroundLight: "#87CEFA",
  grayLight: "#DADADA",
  gray: "#949494",
  grayDark: "#545454",
  white: "#FFFFFF",
};

export const fontFamily = {
  Gilmer: "Gilmer",
  GilmerLight: "Gilmer-Light",
  GilmerMedium: "Gilmer-Medium",
  GilmerBold: "Gilmer-Bold",
  GilmerHeavy: "Gilmer-Heavy",
};

export const apiAhiLlego = {
  develop: "http://localhost:3000/api/v1/ahi-llego",
  quality: "http://3.80.107.238:3000/api/v1/ahi-llego",
  production: "http://3.80.107.238:3000/api/v1/ahi-llego",
};

export const storage = {
  session: "@ahillego_session",
  tutorial: "@tutorial",
};

export const statusOrder = {
  STATUS_ORDER_PENDING: "63d9173ac07407cbcde40711",
  STATUS_ORDER_PROCESSING: "63d919bdc07407cbcde40715",
  STATUS_ORDER_ON_ROUTE: "63d919fdc07407cbcde40717",
  STATUS_ORDER_FINALIZED: "63d91a48e85d063c4cb5ddad",
  STATUS_ORDER_CANCELLED: "63d91a77e85d063c4cb5ddaf",
};

export const stepStatusOrder = {
  STEP_ORDER_PENDING: 1,
  STEP_ORDER_PROCESSING: 2,
  STEP_ORDER_ON_ROUTE: 3,
  STEP_ORDER_FINALIZED: 4,
  STEP_ORDER_CANCELLED: 5,
};

export const photosDefault = {
  deliveryMan:
    "https://firebasestorage.googleapis.com/v0/b/ahi-llego.appspot.com/o/deliveryMans%2Fdefault.png?alt=media&token=4720962c-7fb3-463f-a54e-0b21645df064",
};

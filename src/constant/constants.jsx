export const appConstants = {
  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",
  LOGIN_FAILURE_NETWORK: "LOGIN_FAILURE_NETWORK",
  SUCCESS: "ALERT_SUCCESS",
  ERROR: "ALERT_ERROR",
  CLEAR: "ALERT_CLEAR",
  LOGOUT: "USERS_LOGOUT",

  REGISTER_REQUEST: "EMPLOYEE_REGISTER_REQUEST",
  REGISTER_SUCCESS: "EMPLOYEE_REGISTER_SUCCESS",
  REGISTER_FAILURE: "EMPLOYEE_REGISTER_FAILURE",

  FETCH_REQUEST: "DATA_REGISTER_REQUEST",
  FETCH_SUCCESS: "DATA_REGISTER_SUCCESS",
  FETCH_FAILURE: "DATA_REGISTER_FAILURE",

  FETCH_SINGLE_REQUEST: "FETCH_SINGLE_REQUEST",
  FETCH_SINGLE_SUCCESS: "FETCH_SINGLE__SUCCESS",
  FETCH_SINGLE_FAILURE: "FETCH_SINGLE__FAILURE",

  DELETE_REQUEST: "EMPLOYE_DELETE_REQUEST",
  DELETE_SUCCESS: "EMPLOYE_DELETE_SUCCESS",
  DELETE_FAILURE: "EMPLOYE_DELETE_FAILURE",

  FETCH_DEPARTMENT_REQUEST: "FETCH_DEPARTMENT_REQUEST",
  FETCH_DEPARTMENT_SUCCESS: "FETCH_DEPARTMENT_SUCCESS",
  FETCH_DEPARTMENT_FAILURE: "FETCH_DEPARTMENT_FAILURE",
};

export const inventoryConstant = {
  ADD_ITEM: "ADD_ITEM",
  REQUEST_ITEM: "REQUEST_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM",
  GET_ITEMS: "GET_ITEMS",
  ERROR: "ERROR",
  ITEM_REQUEST: "ITEM_REQUEST",
  DELETE_ITEM: "DELETE_ITEM",
  REQUEST_GET_EXISTING_CATEGORIES: "REQUEST_GET_EXISTING_CATEGORIES",
  SUCCESS_GET_EXISTING_CATEGORIES: "SUCCESS_GET_EXISTING_CATEGORIES",
  REQUEST_GET_CATEGORIES: "REQUEST_GET_ITEMS_BY_CATEGORIES",
  SUCCESS_GET_CATEGORIES: "SUCCESS_GET_ITEMS_BY_CATEGORIES",
  REQUEST_GET_PURCHASED_ITEMS: "REQUEST_GET_PURCHASED_ITEMS",
  SUCCESS_GET_PURCHASED_ITEMS: "SUCCESS_GET_PURCHASED_ITEMS",
  REQUEST_PUT_UPDATE_STATUS: "REQUEST_PUT_UPDATE_STATUS",
  SUCCESS_PUT_UPDATE_STATUS: "SUCCESS_PUT_UPDATE_STATUS",
  REQUEST_GET_GRV: "REQUEST_GET_GRV",
  SUCCESS_GET_GRV: "SUCCESS_GET_GRV",
  REQUEST_GET_RECORDS: "REQUEST_GET_RECORDS",
  SUCCESS_GET_RECORDS: "SUCCESS_GET_RECORDS"
};

export const companyConstant = {
  ADD_COMPANY: "ADD_COMPANY",
  GET_COMPANYS: "GET_COMPANYS",
  REQUEST_GET_COMANY: "REQUEST_GET_COMPANY",
  DELETE_COMPANY: "DELETE_COMPANY",
  REQUEST_ADD_SUPPLIER: "REQUEST_ADD_SUPPLIER",
  SUCCESS_ADD_SUPPLIER: "SUCCESS_ADD_SUPPLIER",
  REQUEST_POST_ADD_SUPPLIER: "POST_REQUEST_ADD_SUPPLIER",
  SUCCESS_POST_ADD_SUPPLIER: "POST_SUCCESS_ADD_SUPPLIER",
  GET_SUPPLIER: "GET_SUPPLIER",
  REQUEST_GET_SUPPLIER: "REQUEST_GET_SUPPLIER",
  DELETE_SUPPLIER: "DELETE_SUPPLIER",
  REQUEST_ADD_MASTERDATA: "REQUEST_MASTERDATA",
  REQUEST_GET_MASTERDATA: "REGUEST_MASTERDATA",
  ADD_MASTERDATA: "ADD_MASTERDATA",
  GET_MASTERDATA: "GET_MASTERDATA",
  REQUEST_UPDATE_STATUS: "REQUEST_UPDATE_STATUS",
  SUCCESS_UPDATE_STATUS: "SUCCESS_UPDATE_STATUS",
  REQUEST_GET_MANUFACTURED_ORDERS: "REQUEST_GET_MANUFACTURED_ORDERS",
  SUCCESS_GET_MANUFACTURED_ORDERS: "SUCCESS_GET_MANUFACTURED_ORDERS"
};

export const manuFacturingConstant = {
  REQUEST_GET_MASTERDATA: "REQUEST_GET_MASTERDATA",
  SUCCESS_GET_MASTERDATA: "SUCCESS_GET_MASTERDATA",
  REQUEST_POST_MANUFATURE: "REQUEST_POST_MANUFATURE",
  SUCCESS_POST_MANUFATURE: "SUCCESS_POST_MANUFATURE",
  REQUEST_GET_ORDERS: "REQUEST_GET_ORDERS",
  SUCCESS_GET_ORDERS: "SUCCESS_GET_ORDERS",
  REQUEST_PUT_ORDERS: "REQUEST_PUT_ORDERS",
  SUCCESS_PUT_ORDERS: "SUCCESS_PUT_ORDERS"
};

export const errorsConstant = {
  GET_ERRORS: "GET_ERRORS",
};

export const GET_INVOICE = "GET_INVOICE";
export const GET_SIV = "GET_SIV";
export const REQUEST_SIV = "REQUEST_SIV";
export const REQUEST_ORDERS = "REQUEST_ORDERS";
export const REQUEST_SINGLE_ORDER = "REQUEST_SINGLE_ORDER";
export const GET_ORDER = "GET_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const GET_SINGLE_ORDER = "GET_SINGLE_ORDER";
export const GET_STATUS = "GET_STATUS";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const UPDATE_SIV = "UPDATE_SIV";

export const itConstants = {
  REGISTER_REQUEST: "USERS_REGISTER_REQUEST",
  REGISTER_SUCCESS: "USERS_REGISTER_SUCCESS",
  REGISTER_FAILURE: "USERS_REGISTER_FAILURE",

  GETALL_REQUEST: "USERS_GETALL_REQUEST",
  GETALL_SUCCESS: "USERS_GETALL_SUCCESS",
  GETALL_FAILURE: "USERS_GETALL_FAILURE",

  DELETE_REQUEST: "USERS_DELETE_REQUEST",
  DELETE_SUCCESS: "USERS_DELETE_SUCCESS",
  DELETE_FAILURE: "USERS_DELETE_FAILURE",
};
export const salesConstants = {
  ORDER_REQUEST: "ORDER_REQUEST",
  ORDER_SUCCESS: "ORDER__SUCCESS",
  ORDER_FAILURE: "ORDER__FAILURE",
  ORDER_GETALL_SUCCESS: "ORDER_GETALL_SUCCESS",
  ORDER_GETALL_FAILURE: "ORDER__GETALL_FAILURE",

  COMPANY_GETALL_REQUEST: "COMPANY_GETALL_REQUEST",
  COMPANY_GETALL_SUCCESS: "COMPANY_GETALL_SUCCESS",
  COMPANY_GETALL_FAILURE: "COMPANY_GETALL_FAILURE",

  ITEM_GETALL_REQUEST: "ITEM_GETALL_REQUEST",
  ITEM_GETALL_SUCCESS: "ITEM_GETALL_SUCCESS",
  ITEM_GETALL_FAILURE: "ITEM__GETALL_FAILURE",

  DELETE_REQUEST: "USERS_DELETE_REQUEST",
  DELETE_SUCCESS: "USERS_DELETE_SUCCESS",
  DELETE_FAILURE: "USERS_DELETE_FAILURE",
};

export const purchaseConstants = {
  GET: {
    REQUEST_GET_ORDER: "GET_ORDER_REQUEST",
    SUCCESS_GET_ORDER: "GET_ORDER_SUCCESS",
    FAILURE_GET_ORDER: "GET_ORDER_FAILURE",
    REQUEST_GET_MASTERDATA: "GET_MASTERDATA_REQUEST",
    SUCCESS_GET_MASTERDATA: "GET_MASTERDATA_SUCCESS",
    FAILURE_GET_MASTERDATA: "GET_MASTERDATA_FAILURE",
    REQUEST_GET_SUPPLIERS: "GET_SUPPLIERS_REQUEST",
    SUCCESS_GET_SUPPLIERS: "GET_SUPPLIERS_SUCCESS",
    FAILURE_GET_SUPPLIERS: "GET_SUPPLIERS_FAILURE",
    REQUEST_GET_SINGLE_ORDER: "GET_SINGLE_ORDER_REQUEST",
    SUCCESS_GET_SINGLE_ORDER: "GET_SINGLE_ORDER_SUCCESS",
    FAILURE_GET_SINGLE_ORDER: "GET_SINGLE_ORDER_FAILURE",
  },

  POST: {
    REQUEST_POST_PURCHASE: "POST_PURCHASE_REQUEST",
    SUCCESS_POST_PURCHASE: "POST_PURCHASE_SUCCESS",
    FAILURE_POST_PURCHASE: "POST_PURCHASE_FAILURE",
  },

  PUT: {
    REQUEST_POST_UPDATE_STATUS: "POST_UPDATE_STATUS_REQUEST",
    SUCCESS_POST_UPDATE_STATUS: "POST_UPDATE_STATUS_SUCCESS",
    FAILURE_POST_UPDATE_STATUS: "POST_UPDATE_STATUS_FAILURE",
    REQUEST_PUT_INVOICE: "REQUEST_PUT_INVOICE",
    SUCCESS_PUT_INVOICE: "SUCCESS_PUT_INVOICE",
  },
};

export const orderConstants = {
  GET: {
    REQUEST_GET_DELIVERED_ORDERS: "REQUEST_GET_DELIVERED_ORDERS",
    SUCCESS_GET_DELIVERED_ORDERS: "SUCCESS_GET_DELIVERED_ORDERS",
  },
};

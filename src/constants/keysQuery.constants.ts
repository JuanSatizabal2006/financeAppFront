const REFERENCES_KEY = {
  categories: {
    get: "getCategories",
  },
};

const BILL_QUERY_KEYS = {
  GET: "getBills",
  POST: "createBill",
  PUT: "updateBill",
  DELETE: "deleteBill",
};

const CREDIT_QUERY_KEYS = {
  GET: "getCreditCards",
};

export { REFERENCES_KEY, BILL_QUERY_KEYS, CREDIT_QUERY_KEYS };

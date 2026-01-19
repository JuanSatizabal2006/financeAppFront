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

const QUOTAS_CREDIT_CARD_KEY = {
  GET : 'getQuotas'
}

export { REFERENCES_KEY, BILL_QUERY_KEYS, CREDIT_QUERY_KEYS, QUOTAS_CREDIT_CARD_KEY };

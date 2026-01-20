const FORM_BILL = {
  NAME: "name",
  PRICE: "price",
  CATEGORY: "categoryId",
};

const FORM_CREDIT_CARD = {
  NAME: "name",
  TOTAL: "maxTotal",
  QUOTA_MANAGE: "quotaManage",
  INTEREST: "interests",
};

const FORM_QUOTA_CREDIT_CARD = {
  NAME: "name",
  PRICE: "price",
  TOTAL_QUOTAS: "totalQuotas",
  CREDIT_CARD: "creditCardId",
  PAID_QUOTAS: "paidQuotas",
  PURCHASE_DATE: "purchaseDate",
};

export { FORM_BILL, FORM_CREDIT_CARD, FORM_QUOTA_CREDIT_CARD };

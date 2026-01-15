export const BILL_QUERY_KEYS = {
  GET: "getBills",
  POST: "createBill",
  PUT: "updateBill",
  DELETE: "deleteBill",
};

interface BillsGetRest {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  active: boolean;
  category: {
    id: string;
    name: "membresia";
  };
}

interface BillManag {
  name: string;
  price: number;
  categoryId: string;
}

export type { BillsGetRest, BillManag };

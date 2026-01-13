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

export type { BillsGetRest };

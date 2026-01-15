interface BillsGetRest {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  active: boolean;
  category: {
    id: string;
    name: string;
  };
}

interface BillCreate {
  name: string;
  price: number;
  categoryId: string;
}

interface BillUpdate extends BillCreate {
  id: string;
}

interface BillManagSucces {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  active: boolean;
}

export type { BillsGetRest, BillCreate, BillManagSucces, BillUpdate };

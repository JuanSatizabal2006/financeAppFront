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

interface BillManag {
  name: string;
  price: number;
  categoryId: string;
}

interface BillManagSucces {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  active: boolean;
}

export type { BillsGetRest, BillManag, BillManagSucces };

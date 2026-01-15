import { fetcher } from "@src/api/fetcher";
import type {
  BillCreate,
  BillsGetRest,
  BillManagSucces,
  BillUpdate,
} from "@src/models/bill.interface";

async function getBills() {
  return await fetcher<BillsGetRest[]>("/fixedExpenses");
}

async function createBill(body: BillCreate) {
  return await fetcher<BillManagSucces>("/fixedExpenses", {
    body,
    method: "POST",
  });
}

async function editBill({ name, price, categoryId, id }: BillUpdate) {
  return await fetcher<BillManagSucces>(`/fixedExpenses/${id}`, {
    body: { name, price, categoryId },
    method: "PUT",
  });
}

export { getBills, createBill, editBill };

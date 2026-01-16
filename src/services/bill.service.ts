import { fetcher } from "@src/api/fetcher";
import { sleep } from "@src/helpers/sleep";
import type {
  BillCreate,
  BillsGetRest,
  BillManagSucces,
  BillUpdate,
} from "@src/models/bill.interface";

async function getBills() {
  await sleep(1000);
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

async function deleteBill(id: string) {
  return await fetcher<BillManagSucces>(`/fixedExpenses/${id}`, {
    method: "DELETE",
  });
}

export { getBills, createBill, editBill, deleteBill };

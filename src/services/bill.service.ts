import { fetcher } from "@src/api/fetcher";
import type {
  BillManag,
  BillsGetRest,
  BillManagSucces,
} from "@src/models/bill.interface";

async function getBills() {
  return await fetcher<BillsGetRest[]>("/fixedExpenses");
}

async function createBill(body: BillManag) {
  return await fetcher<BillManagSucces>("/fixedExpenses", { body, method: "POST" });
}

export { getBills, createBill };

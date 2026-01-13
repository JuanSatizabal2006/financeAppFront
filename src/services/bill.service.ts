import { fetcher } from "@src/api/fetcher";
import type { BillsGetRest } from "@src/models/bill.interface";

async function getBills() {
  return await fetcher<BillsGetRest[]>("/fixedExpenses");
}

export { getBills };

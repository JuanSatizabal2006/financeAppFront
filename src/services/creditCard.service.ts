import { fetcher } from "@src/api/fetcher";
import { sleep } from "@src/helpers/sleep";
import type {
  CreateCreditCard,
  CreditCard,
} from "@src/models/core/creditCard.interface";

async function getCreditCards() {
  await sleep(1000);
  return fetcher<CreditCard[]>("/creditCard");
}

async function createCreditCard(body: CreateCreditCard) {
  return fetcher<CreditCard>("/creditCard", {
    body,
    method: "POST",
  });
}

export { getCreditCards, createCreditCard };

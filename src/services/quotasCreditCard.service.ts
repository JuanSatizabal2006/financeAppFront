import { fetcher } from "@src/api/fetcher";
import { sleep } from "@src/helpers/sleep";
import type {
  CreateCreditCard,
  CreditCard,
} from "@src/models/core/creditCard.interface";
import type { QuotaCreditCard } from "@src/models/core/quotaCreditCard.interface";

async function getQuotasCreditCards() {
  await sleep(1000);
  return fetcher<QuotaCreditCard[]>("/quotas");
}

async function createCreditCard(body: CreateCreditCard) {
  return fetcher<CreditCard>("/creditCard", {
    body,
    method: "POST",
  });
}

export { getQuotasCreditCards, createCreditCard };

import { fetcher } from "@src/api/fetcher";
import { sleep } from "@src/helpers/sleep";
import type {
  QuotaCreditCard,
  QuotaCreditCardCreate,
} from "@src/models/core/quotaCreditCard.interface";

async function getQuotasCreditCards() {
  await sleep(1000);
  return fetcher<QuotaCreditCard[]>("/quotas");
}

async function createQuotaCreditCard(body: QuotaCreditCardCreate) {
  return fetcher<QuotaCreditCard>("/quotas", {
    body,
    method: "POST",
  });
}

export { getQuotasCreditCards, createQuotaCreditCard };

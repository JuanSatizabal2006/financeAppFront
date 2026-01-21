import { fetcher } from "@src/api/fetcher";
import { sleep } from "@src/helpers/sleep";
import type {
  QuotaCreditCard,
  QuotaCreditCardCreate,
  QuotaCreditCardUpdate,
} from "@src/models/core/quotaCreditCard.interface";

async function getQuotasCreditCards() {
  await sleep(500);
  return fetcher<QuotaCreditCard[]>("/quotas");
}

async function createQuotaCreditCard(body: QuotaCreditCardCreate) {
  return fetcher<QuotaCreditCard>("/quotas", {
    body,
    method: "POST",
  });
}

async function updateQuotaCreditCard(body: QuotaCreditCardUpdate) {
  return fetcher<QuotaCreditCard>(`/quotas/${body.id}`, {
    body,
    method: "PUT",
  });
}

export { getQuotasCreditCards, createQuotaCreditCard, updateQuotaCreditCard };

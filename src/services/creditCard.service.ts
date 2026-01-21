import { fetcher } from "@src/api/fetcher";
import { sleep } from "@src/helpers/sleep";
import type {
  CreateCreditCard,
  CreditCard,
  UpdateCreditCard,
} from "@src/models/core/creditCard.interface";

async function getCreditCards() {
  await sleep(500);
  return fetcher<CreditCard[]>("/creditCard");
}

async function createCreditCard(body: CreateCreditCard) {
  return fetcher<CreditCard>("/creditCard", {
    body,
    method: "POST",
  });
}

async function updateCreditCard({
  id,
  interests,
  maxTotal,
  name,
  quotaManage,
}: UpdateCreditCard) {
  return fetcher<CreditCard>(`/creditCard/${id}`, {
    body: {
      interests,
      maxTotal,
      name,
      quotaManage,
    },
    method: "PUT",
  });
}

export { getCreditCards, createCreditCard, updateCreditCard };

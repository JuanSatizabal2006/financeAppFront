import type {
  CountQuotaCreditCard,
  QuotaCreditCard,
} from "@src/models/core/quotaCreditCard.interface";

function getCountCreditCards(
  quotas: QuotaCreditCard[],
): CountQuotaCreditCard[] {
  const creditCards: Record<string, CountQuotaCreditCard> = {};

  quotas.forEach(({ creditCardId, creditCard, priceQuota }) => {
    if (creditCards?.[creditCardId]) {
      creditCards[creditCardId].priceMin += Number(priceQuota);
      creditCards[creditCardId].totalPurchases++;
    } else {
      creditCards[creditCardId] = {
        id: creditCardId,
        name: creditCard.name,
        priceMin: Number(priceQuota),
        totalPurchases: 1,
      };
    }
  });

  const creditCardsArray = Object.entries(creditCards).map(
    (values) => values[1],
  );

  return creditCardsArray;
}

export { getCountCreditCards };

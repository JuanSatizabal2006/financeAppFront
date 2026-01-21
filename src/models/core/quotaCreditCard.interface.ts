interface QuotaCreditCard {
  id: string;
  name: string;
  price: number;
  priceQuota: number;
  totalQuotas: number;
  paidQuotas: number;
  purchaseDate: string | Date;
  creditCardId: string;
  dateFinish?: string | Date;
  active: boolean;
  creditCard: {
    id: string;
    name: string;
  };
}

interface QuotaCreditCardCreate {
  name: string;
  creditCardId: string;
  purchaseDate: Date;
  price: number;
  totalQuotas: number;
  paidQuotas: number;
}

interface CountQuotaCreditCard {
  id: string;
  name: string;
  priceMin: number;
  totalPurchases: number;
}

interface QuotaCreditCardUpdate extends QuotaCreditCardCreate {
  id: string;
}

export type {
  QuotaCreditCard,
  CountQuotaCreditCard,
  QuotaCreditCardCreate,
  QuotaCreditCardUpdate,
};

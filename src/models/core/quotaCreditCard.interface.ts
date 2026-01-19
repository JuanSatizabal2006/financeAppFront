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

export type { QuotaCreditCard };

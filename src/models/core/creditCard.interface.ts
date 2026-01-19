interface CreditCard {
  id: string;
  name: string;
  maxTotal: number;
  quotaManage: number;
  interests: number;
  active: boolean;
}

interface CreateCreditCard {
  name: string;
  maxTotal: number;
  quotaManage: number;
  interests: number;
}

interface UpdateCreditCard extends CreateCreditCard {
  id: string;
}

export type { CreditCard, CreateCreditCard, UpdateCreditCard };

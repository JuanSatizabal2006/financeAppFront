import {
  Banknote,
  BanknoteArrowDown,
  BanknoteX,
  CreditCard,
} from "lucide-vue-next";
import type { SideRoute } from "@src/models/layout.interface";
import { ROUTES } from "@src/models/routes.enum";

export const routesTitle = {
  [ROUTES.PAYMENTS]: "Pagos",
  [ROUTES.BILLS]: "Gastos fijos",
  [ROUTES.CREDIT_CARD]: "Tarjetas de credito",
  [ROUTES.DEBTS]: "Deudas",
};

export const routes: SideRoute[] = [
  {
    path: ROUTES.PAYMENTS,
    icon: Banknote,
    text: routesTitle[ROUTES.PAYMENTS],
  },
  {
    path: ROUTES.BILLS,
    icon: BanknoteArrowDown,
    text: routesTitle[ROUTES.BILLS],
  },
  {
    path: ROUTES.DEBTS,
    icon: BanknoteX,
    text: routesTitle[ROUTES.DEBTS],
  },
  {
    path: ROUTES.CREDIT_CARD,
    icon: CreditCard,
    text: routesTitle[ROUTES.CREDIT_CARD],
  },
];

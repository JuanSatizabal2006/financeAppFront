import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import { ROUTES } from "@src/models/routes.enum";

import BillsPage from "@src/pages/BillsPage.vue";
import CreditCardsPage from "@src/pages/CreditCardsPage.vue";
import DebtsPage from "@src/pages/DebtsPage.vue";
import PaymentsPage from "@src/pages/PaymentsPage.vue";
import QuotasCreditCard from "@src/pages/QuotasCreditCard.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: ROUTES.PAYMENTS },
  { path: ROUTES.PAYMENTS, component: PaymentsPage },
  { path: ROUTES.BILLS, component: BillsPage },
  { path: ROUTES.CREDIT_CARD, component: CreditCardsPage },
  { path: ROUTES.DEBTS, component: DebtsPage },
  { path: ROUTES.QUOTAS, component: QuotasCreditCard },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

import { fetcher } from "@src/api/fetcher";
import type { Categories } from "@src/models/references.interface";

async function getCategories() {
  return await fetcher<Categories[]>("/reference/categories");
}

export { getCategories };

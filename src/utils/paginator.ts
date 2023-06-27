export interface Paginator {
  total_items: number;
  total_pages: number;
  item_from: number;
  item_to: number;
  current_page: number;
  limit: number;
  next_page: number | null;
  previous_page: number | null;
}
export class Paginator {
  constructor(data: unknown) {
    Object.assign(this, data);
  }

  hasNextPage(): boolean {
    return this.next_page !== null;
  }

  hasPreviousPage(): boolean {
    return this.previous_page !== null;
  }
}

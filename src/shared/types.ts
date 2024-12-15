export type PaginationParams = {
  page: number;
  limit: number;
  sort: 'desc' | 'asc';
};

export enum TaskStatus {
  TO_DO = 1,
  IN_PROGRESS = 2,
  DONE = 3,
  UNDER_REVIEW = 4,
  APPROVE = 5,
}

export enum TaskPriority {
  NORMAL = 1,
  LOW = 2,
  HIGHT = 3,
  URGENT = 4,
}

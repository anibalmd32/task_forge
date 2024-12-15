export class BaseCoreEntity {
  id: number;
  uuid: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date | string;
}

export type OmitBaseEntity<T> = Omit<T, keyof BaseCoreEntity>;

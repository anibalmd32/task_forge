import { Entity, Column, ManyToOne } from 'typeorm';
import { Base } from './base';
import { UserEntity } from './user.entity';

enum TaskStatus {
  TO_DO = 1,
  IN_PROGRESS = 2,
  DONE = 3,
  UNDER_REVIEW = 4,
  APPROVE = 5,
}

@Entity({ name: 'tasks' })
export class TaskEntity extends Base {
  @Column('varchar', { name: 'title' })
  title: string;

  @Column('enum', {
    name: 'status',
    enum: TaskStatus,
    default: TaskStatus.TO_DO,
  })
  status: TaskStatus;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  assignedTo: UserEntity;

  comments: any;
}

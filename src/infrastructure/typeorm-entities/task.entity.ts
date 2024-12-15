import { Entity, Column, ManyToOne } from 'typeorm';
import { Base } from './base';
import { UserEntity } from './user.entity';
import { TaskStatus, TaskPriority } from '~/shared/types';

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

  @Column('enum', {
    name: 'priority',
    enum: TaskPriority,
    default: TaskPriority.NORMAL,
  })
  priority: TaskPriority;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  assignedTo: UserEntity;

  comments: any;
}

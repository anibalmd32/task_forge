import { Entity, Column, ManyToOne } from 'typeorm';
import { Base } from './base';
import { UserEntity } from './user.entity';
import { TaskEntity } from './task.entity';

@Entity({ name: 'comments' })
export class CommentEntity extends Base {
  @Column('text', { name: 'content' })
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  writtenBy: UserEntity;

  @ManyToOne(() => TaskEntity, (task) => task.comments)
  task: TaskEntity;
}

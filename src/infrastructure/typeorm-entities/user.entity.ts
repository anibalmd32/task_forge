import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';
import { Base } from './base';
import { ProjectEntity } from './project.entity';
import { TaskEntity } from './task.entity';
import { CommentEntity } from './comment.entity';

@Entity({ name: 'users' })
export class UserEntity extends Base {
  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'last_name', type: 'varchar', nullable: false })
  lastName: string;

  @Column({ name: 'email', type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ name: 'password', type: 'text', nullable: true })
  password: string;

  @Column('varchar', { name: 'username', unique: true })
  username: string;

  @Column('text', { name: 'image_url', nullable: true })
  imagenUrl: string;

  @OneToMany(() => ProjectEntity, (project) => project.owner)
  projectsOwner: ProjectEntity[];

  @ManyToMany(() => ProjectEntity, (project) => project.members)
  projectsMember: ProjectEntity[];

  @OneToMany(() => TaskEntity, (task) => task.assignedTo)
  tasks: TaskEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.writtenBy)
  comments: CommentEntity[];
}

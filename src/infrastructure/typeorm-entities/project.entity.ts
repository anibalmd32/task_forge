import { Entity, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Base } from './base';
import { UserEntity } from './user.entity';

@Entity({ name: 'projects' })
export class ProjectEntity extends Base {
  @Column('varchar', { name: 'name' })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.projectsOwner)
  owner: UserEntity;

  @ManyToMany(() => UserEntity, (user) => user.projectsMember)
  members: UserEntity[];
}

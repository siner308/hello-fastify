import {
  BaseEntity,
  Column,
  CreateDateColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn, Entity,
} from 'typeorm';
import { Hashtag } from './hashtag.entity';
import { User } from './user.entity';

@Entity()
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToMany(() => Hashtag)
  hashtags: Hashtag[];

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by_id', referencedColumnName: 'id' })
  createdBy?: User;

  @Column({ type: 'uuid', nullable: true })
  createdById?: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updated_by_id', referencedColumnName: 'id' })
  updatedBy?: User;

  @Column({ type: 'uuid', nullable: true })
  updatedById?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

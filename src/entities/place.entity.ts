import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Hashtag } from './hashtag.entity';
import { Brand } from './brand.entity';

@Entity()
export class Place extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: false })
  latitude: number;

  @Column({ type: 'decimal', precision: 15, scale: 3, nullable: false })
  longitude: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  address?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  telephone?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToMany(() => Hashtag)
  hashtags: Hashtag[];

  @ManyToOne(() => Brand, { nullable: true })
  @JoinColumn({ name: 'brand_id', referencedColumnName: 'id' })
  brand: Brand;

  @Column({ type: 'uuid', nullable: true })
  brandId: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by_id', referencedColumnName: 'id' })
  createdBy: User;

  @Column({ name: 'created_by_id', type: 'uuid', nullable: true })
  createdById: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updated_by_id', referencedColumnName: 'id' })
  updated_by: User;

  @Column({ name: 'updated_by_id', type: 'uuid', nullable: true })
  updatedById: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  is_deleted: boolean;
}

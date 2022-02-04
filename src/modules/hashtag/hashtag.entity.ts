import { BaseEntity, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Hashtag extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 150 })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

import { Column, Entity } from 'typeorm';
import { User } from '../../domain/entities/User';
import { BaseModel } from './BaseModel';

@Entity({ name: 'users' })
export class UserModel extends BaseModel implements User {
  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}

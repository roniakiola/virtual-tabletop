import { BaseEntity } from './BaseEntity';

export class User extends BaseEntity {
  username!: string;
  email!: string;
  password!: string;
}

import { BaseEntity } from './BaseEntity';

export interface User extends BaseEntity {
  username: string;
  email: string;
  password: string;
}

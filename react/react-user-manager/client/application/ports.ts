import { Account } from '../domain/account/account';
import { User } from '../domain/users/user';

export interface AccountStorageService {
  account?: Account;
  updateAccount(account: Account): void;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface UserService {
  getUsers?(): Promise<unknown>;
  userList?: string[];
  createUser(user: never): Promise<unknown>;
  deleteUser(id: number): Promise<unknown>;
  editUser(user: User): Promise<unknown>;
  getAllUsers(): Promise<unknown>;
  getUserById(id: number): Promise<unknown>;
  uploadUserDocument(file: FormData): unknown;
}

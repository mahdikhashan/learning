import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { UserService } from '../application/ports';
import { User } from '../domain/users/user';
import { Delete, Get, Post, Put } from './api';

export function useUser(): UserService {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Get(`http://localhost:3001/api/users`).then((users: []) => setUserList(users));
  }, []);

  const getAllUsers = () => Get('http://localhost:3001/api/users');

  const getUserById = (id: number): Promise<AxiosResponse> =>
    Get(`http://localhost:3001/api/users/${id}`);

  const createUser = (user) => Post('http://localhost:3001/api/users', user);

  const deleteUser = (id) => Delete(`http://localhost:3001/api/users/${id}`);

  const editUser = (user: User) => Put(`http://localhost:3001/api/users/${user.id}`, user);

  const uploadUserDocument = (file: FormData): Promise<AxiosResponse> => {
    Post('http://localhost:3001/upload-documents', file);
  };

  //
  // const disableUser = () => {};
  //
  // const changeUserRole = () => {};

  // fakeApi([
  //   {
  //     id: 1,
  //     firstName: 'martin',
  //     lastName: 'khashan',
  //     age: 12,
  //     fullName: "mahdi khashan"
  //   }
  // ]);

  return {
    userList,
    createUser,
    deleteUser,
    editUser,
    getAllUsers,
    getUserById,
    uploadUserDocument
  };
}

/* eslint-disable no-param-reassign */
/* eslint-disable no-throw-literal */
/* eslint-disable prettier/prettier */
import { json, response } from "express";
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user: User = new User();
    Object.assign(user, {
      name, email
    })

    user.updated_at = new Date();

    this.users.push(user)

    return user
  }

  findById(id: string): User | undefined {
    try {
      const user = this.users.find(user => user.id === id)
      user.updated_at = new Date();
      return user
    } catch (error) {
      throw {
        status: 442,
        message: `Houve um problema ao buscar o usuario na base de dados: ${error.message || error}`
      }
    }

  }

  findByEmail(email: string): User | undefined {
    try {
      const user = this.users.find(user => user.email === email)
      return user
    } catch (error) {
      throw {
        status: 442,
        message: `Houve um problema ao buscar o email na base de dados: ${error.message || error}`
      }
    }
  }

  turnAdmin(receivedUser: User): User {
    const user: User = new User();
    Object.assign(user, {
      receivedUser
    });

    receivedUser.admin = true;
    receivedUser.created_at = new Date();
    receivedUser.updated_at = new Date();

    this.users.push(receivedUser)

    return receivedUser
  }

  list(): User[] {
    return this.users
  }
}

export { UsersRepository };

/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExist = this.usersRepository.findById(user_id);

    if(!userAlreadyExist) {
      throw new Error("Usuario Invalido");
    }

    if(userAlreadyExist.admin === false) {
      throw new Error("Usuario sem credenciais para ver a lista")
    }
    
  return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyExist = this.usersRepository.findById(user_id);

    if(!userAlreadyExist) {
      throw new Error("Usuario Invalido");
    }
    
    const user = this.usersRepository.turnAdmin(userAlreadyExist)

    return user
  }
}

export { TurnUserAdminUseCase };

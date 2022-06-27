/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
     
      const user_id = request.headers.user_id as string;
      const list = this.listAllUsersUseCase.execute({ user_id });
      return response.json(list)

    } catch (error) {
      response.status(400).json({ error: "Não altorizado" });
    }

  }
}

export { ListAllUsersController };

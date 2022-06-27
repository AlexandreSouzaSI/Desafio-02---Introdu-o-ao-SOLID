/* eslint-disable prettier/prettier */
import { v4 as uuidV4 } from "uuid";

class User {
  public readonly id: string;
  public name: string;
  public admin: boolean;
  public email: string;
  public created_at: Date;
  public updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.admin) {
      this.admin = false
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

export { User };

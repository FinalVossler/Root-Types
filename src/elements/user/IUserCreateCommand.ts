import { SuperRoleEnum } from "./IUserReadDto";

export interface IUserCreateCommand {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId?: string;
  superRole: SuperRoleEnum;
}

import { SuperRoleEnum } from "./IUserReadDto";

export interface IUserUpdateCommand {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  roleId?: string;
  superRole?: SuperRoleEnum;
  hasMessagingEmailsActivated?: boolean;
}

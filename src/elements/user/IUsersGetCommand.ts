import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IUsersGetCommand {
  paginationCommand: IPaginationCommand;
  roleId?: string;
}

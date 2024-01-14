import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IMessageGetBetweenUsersCommand {
  paginationCommand: IPaginationCommand;
  usersIds: string[];
}

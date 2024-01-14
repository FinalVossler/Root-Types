import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IUsersSearchCommand {
  firstNameOrLastNameOrEmail: string;
  paginationCommand: IPaginationCommand;
}

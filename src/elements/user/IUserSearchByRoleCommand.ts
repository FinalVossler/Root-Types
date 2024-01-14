import { IUsersSearchCommand } from "./IUsersSearchCommand";

export interface IUserSearchByRoleCommand {
  searchCommand: IUsersSearchCommand;
  roleId: string;
}

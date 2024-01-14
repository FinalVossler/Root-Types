import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface INotificationsGetCommand {
  userId: string;
  paginationCommand: IPaginationCommand;
}

import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IRolesSearchCommand {
  name: string;
  paginationCommand: IPaginationCommand;
}

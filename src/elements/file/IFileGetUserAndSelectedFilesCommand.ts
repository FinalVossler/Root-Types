import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IFileGetUserAndSelectedFilesCommand {
  paginationCommand: IPaginationCommand;
  selectedFilesIds: string[];
}

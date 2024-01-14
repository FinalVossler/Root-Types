import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IFileGetUnownedAndSelectedFilesCommand {
  paginationCommand: IPaginationCommand;
  selectedFilesIds: string[];
}

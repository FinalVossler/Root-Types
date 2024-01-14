import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IEntitiesSearchCommand {
  name: string;
  modelId: string;
  paginationCommand: IPaginationCommand;
}

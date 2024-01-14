import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IEntitiesGetCommand {
  modelId: string;
  paginationCommand: IPaginationCommand;
}

import { IEntityFieldValueCommand } from "./IEntityCreateCommand";

export interface IEntityUpdateCommand {
  _id: string;
  modelId: string;
  entityFieldValues: IEntityFieldValueCommand[];
  assignedUsersIds: string[];
  availableShippingMethodsIds?: string[];
  language: string;
}

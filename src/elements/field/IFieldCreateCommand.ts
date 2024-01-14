import { IEventCommand } from "../event/IEventCommand";
import { IFieldTableElementCreateCommand } from "../fieldTableElement/IFieldTableElementCreateCommand";
import { FieldTypeEnum } from "./IFieldReadDto";

export interface IFieldCreateCommand {
  name: string;
  type: FieldTypeEnum;
  canChooseFromExistingFiles: boolean;
  fieldEvents: IEventCommand[];
  options?: {
    label: string;
    value: string;
  }[];
  tableOptions: {
    name: string;
    columns: IFieldTableElementCreateCommand[];
    rows: IFieldTableElementCreateCommand[];
    yearTable: boolean;
  };
  language: string;
}

import { IEventCommand } from "../event/IEventCommand";
import { IFieldTableElementUpdateCommand } from "../fieldTableElement/IFieldTableElementUpdateCommand";
import { FieldTypeEnum } from "./IFieldReadDto";

export interface IFieldUpdateCommand {
  _id: string;
  name: string;
  type: FieldTypeEnum;
  canChooseFromExistingFiles: boolean;
  fieldEvents: IEventCommand[];
  language: string;
  options?: {
    label: string;
    value: string;
  }[];
  tableOptions: {
    name: string;
    columns: IFieldTableElementUpdateCommand[];
    rows: IFieldTableElementUpdateCommand[];
    yearTable: boolean;
  };
}

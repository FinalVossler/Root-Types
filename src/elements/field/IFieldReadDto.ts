import { IEventReadDto } from "../event/IEventReadDto";
import { IFieldTableElementReadDto } from "../fieldTableElement/IFieldTableElementReadDto";
import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IUserReadDto } from "../user/IUserReadDto";

export enum FieldTypeEnum {
  Number = "Number",
  Text = "Text",
  Paragraph = "Paragraph",
  File = "File",
  Selector = "Selector",
  Button = "Button",
  Table = "Table",
  IFrame = "IFrame",
}

export interface IFieldOptionReadDto {
  value: string;
  label: ITranslatedText[];
}

export interface IFieldReadDto {
  _id: string;
  name: ITranslatedText[];
  type: FieldTypeEnum;
  canChooseFromExistingFiles?: boolean;
  options?: IFieldOptionReadDto[];
  fieldEvents: IEventReadDto[];
  tableOptions?: {
    name?: ITranslatedText[];
    columns: (IFieldTableElementReadDto | string)[];
    rows: (IFieldTableElementReadDto | string)[];
    yearTable: boolean;
  };
  owner?: IUserReadDto | string;

  createdAt: string;
  updatedAt: string;
}

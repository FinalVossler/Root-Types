import { IFieldTableElementReadDto } from "../fieldTableElement/IFieldTableElementReadDto";
import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IFieldReadDto } from "../field/IFieldReadDto";
import { IFileReadDto } from "../file/IFileReadDto";
import { IModelReadDto } from "../model/IModelReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

export interface IEntityFieldValueReadDto {
  field: IFieldReadDto | string;
  value: ITranslatedText[];
  files: (IFileReadDto | string)[];
  tableValues?: IEntityTableFieldCaseValueReadDto[];
  yearTableValues?: IEntityYearTableFieldRowValuesReadDto[];
}

export interface IEntityTableFieldCaseValueReadDto {
  column: IFieldTableElementReadDto | string;
  row: IFieldTableElementReadDto | string;
  value: ITranslatedText[];
}

export interface IEntityYearTableFieldRowValuesReadDto {
  row: IFieldTableElementReadDto | string;
  values: {
    year: number;
    value: ITranslatedText[];
  }[];
}

export interface IEntityReadDto {
  _id: string;
  model: IModelReadDto | string;
  entityFieldValues: IEntityFieldValueReadDto[];
  assignedUsers: (IUserReadDto | string)[];
  customData?: Object;

  createdAt: string;
  updatedAt: string;
}

import { IFieldTableElementReadDto } from "../fieldTableElement/IFieldTableElementReadDto";
import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IFieldReadDto } from "../field/IFieldReadDto";
import { IFileReadDto } from "../file/IFileReadDto";
import { IModelReadDto } from "../model/IModelReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

export interface IEntityFieldValueReadDto {
  field: IFieldReadDto;
  value: ITranslatedText[];
  files: IFileReadDto[];
  tableValues?: IEntityTableFieldCaseValueReadDto[];
  yearTableValues?: IEntityYearTableFieldRowValuesReadDto[];
}

export interface IEntityTableFieldCaseValueReadDto {
  column: IFieldTableElementReadDto;
  row: IFieldTableElementReadDto;
  value: ITranslatedText[];
}

export interface IEntityYearTableFieldRowValuesReadDto {
  row: IFieldTableElementReadDto;
  values: {
    year: number;
    value: ITranslatedText[];
  }[];
}

export interface IEntityReadDto {
  _id: string;
  model: IModelReadDto;
  entityFieldValues: IEntityFieldValueReadDto[];
  assignedUsers: IUserReadDto[];
  customData?: Object;

  createdAt: string;
  updatedAt: string;
}

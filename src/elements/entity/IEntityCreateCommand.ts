import { IFileCommand } from "../file/IFileCommand";

export interface IEntityCreateCommand {
  modelId: string;
  entityFieldValues: IEntityFieldValueCommand[];
  assignedUsersIds: string[];
  availableShippingMethodsIds?: string[];

  orderAssociationConfig?: {
    orderId: string;
    productId?: string;
  };

  language: string;
}

export interface IEntityFieldValueCommand {
  fieldId: string;
  value: string;
  files: IFileCommand[];

  tableValues: IEntityTableFieldCaseValueCommand[];
  yearTableValues: IEntityYearTableFieldRowValuesCommand[];
}

export interface IEntityTableFieldCaseValueCommand {
  columnId: string;
  rowId: string;
  value: string;
}

export interface IEntityYearTableFieldRowValuesCommand {
  rowId: string;
  values: {
    year: number;
    value: string;
  }[];
}

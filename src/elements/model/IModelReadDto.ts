import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IEventReadDto } from "../event/IEventReadDto";
import { IFieldReadDto } from "../field/IFieldReadDto";
import { IModelStateReadDto } from "../modelState/IModelStateReadDto";

//#region model fields
export interface IModelField {
  field: IFieldReadDto;
  required: boolean;
  conditions?: IModelFieldCondition[];
  states?: IModelStateReadDto[];
  mainField?: boolean;
}

export interface IModelFieldCondition {
  field?: IFieldReadDto;
  conditionType: ModelFieldConditionTypeEnum;
  value?: number | string;
  modelState?: IModelStateReadDto;
}

export enum ModelFieldConditionTypeEnum {
  SuperiorTo = "SuperiorTo",
  SuperiorOrEqualTo = "SuperiorOrEqualTo",
  InferiorTo = "InferiorTo",
  InferiorOrEqualTo = "InferiorOrEqualTo",
  Equal = "Equal",
  ValueInferiorOrEqualToCurrentYearPlusValueOfFieldAndSuperiorOrEqualToCurrentYear = "ValueInferiorOrEqualToCurrentYearPlusValueOfFieldAndSuperiorOrEqualToCurrentYear",
  StateConditionsMet = "StateConditionsMet",
  IfYearTableThenNumberOfYearsInTheFutureIsEqualToValueOfField = "IfYearTableThenNumberOfYearsInTheFutureIsEqualToValueOfField",
}

export interface IModelReadDto {
  _id: string;
  name: ITranslatedText[];
  modelFields: {
    field: IFieldReadDto;
    required: boolean;
    conditions?: {
      field?: IFieldReadDto;
      conditionType: ModelFieldConditionTypeEnum;
      value?: number | string;
      modelState?: IModelStateReadDto;
    }[];
    states?: IModelStateReadDto[];
    mainField?: boolean;
  }[];
  modelEvents?: IEventReadDto[];
  states?: IModelStateReadDto[];
  subStates?: IModelStateReadDto[];

  createdAt: string;
  updatedAt: string;
}

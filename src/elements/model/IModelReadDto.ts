import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IEventReadDto } from "../event/IEventReadDto";
import { IFieldReadDto } from "../field/IFieldReadDto";
import { IModelStateReadDto } from "../modelState/IModelStateReadDto";

//#region model fields
export interface IModelFieldReadDto {
  field: IFieldReadDto | string;
  required: boolean;
  conditions?: IModelFieldConditionReadDto[];
  states?: (IModelStateReadDto | string)[];
  mainField?: boolean;
  stickInTable?: boolean;
}

export interface IModelFieldConditionReadDto {
  field?: IFieldReadDto | string;
  conditionType: ModelFieldConditionTypeEnum;
  value?: number | string;
  modelState?: IModelStateReadDto | string;
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
  modelFields: IModelFieldReadDto[];
  modelEvents?: IEventReadDto[];
  states?: (IModelStateReadDto | string)[];
  subStates?: (IModelStateReadDto | string)[];

  createdAt: string;
  updatedAt: string;
}

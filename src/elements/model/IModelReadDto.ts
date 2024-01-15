import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IEventReadDto } from "../event/IEventReadDto";
import { IFieldReadDto } from "../field/IFieldReadDto";
import { IModelStateReadDto } from "../modelState/IModelStateReadDto";

//#region model fields
export interface IModelFieldReadDto {
  field: IFieldReadDto;
  required: boolean;
  conditions?: IModelFieldConditionReadDto[];
  states?: IModelStateReadDto[];
  mainField?: boolean;
}

export interface IModelFieldConditionReadDto {
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
  modelFields: IModelFieldReadDto[];
  modelEvents?: IEventReadDto[];
  states?: IModelStateReadDto[];
  subStates?: IModelStateReadDto[];

  createdAt: string;
  updatedAt: string;
}

import { IEventCommand } from "../event/IEventCommand";
import { IModelStateUpdateCommand } from "../modelState/IModelStateUpdateCommand";
import { ModelFieldConditionTypeEnum } from "./IModelReadDto";

export interface IModelUpdateCommand {
  _id: string;
  name: string;
  modelFields: {
    fieldId: string;
    required: boolean;
    conditions?: {
      fieldId: string;
      conditionType: ModelFieldConditionTypeEnum;
      value: number | string;
      modelStateId?: string;
    }[];
    modelStatesIds: string[];
    mainField: boolean;
    stickInTable: boolean;
  }[];
  modelEvents: IEventCommand[];
  states: IModelStateUpdateCommand[];
  subStates: IModelStateUpdateCommand[];

  isForSale: boolean;
  priceFieldId?: string;
  quantityFieldId?: string;

  language: string;
}

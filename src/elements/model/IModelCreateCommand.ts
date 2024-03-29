import { IEventCommand } from "../event/IEventCommand";
import { IModelStateCreateCommand } from "../modelState/IModelStateCreateCommand";
import { IModelOrderAssociationConfigCommand } from "./IModelOrderAssociationConfigCommand";
import { ModelFieldConditionTypeEnum } from "./IModelReadDto";

export interface IModelCreateCommand {
  name: string;
  modelFields: {
    fieldId: string;
    required: boolean;
    conditions?: {
      fieldId: string;
      conditionType: ModelFieldConditionTypeEnum;
      value: number | string;
      modelStateId: string[];
    }[];
    modelStatesIds: string[];
    mainField: boolean;
    stickInTable: boolean;
  }[];
  modelEvents: IEventCommand[];
  states: IModelStateCreateCommand[];
  subStates: IModelStateCreateCommand[];

  isForSale: boolean;
  priceFieldId?: string;
  quantityFieldId?: string;
  imageFieldId?: string;

  isForOrder: boolean;
  orderAssociationConfig?: IModelOrderAssociationConfigCommand;

  language: string;
}

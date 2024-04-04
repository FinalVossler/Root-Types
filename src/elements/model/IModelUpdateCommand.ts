import { IEventCommand } from "../event/IEventCommand";
import { IModelStateUpdateCommand } from "../modelState/IModelStateUpdateCommand";
import { IModelOrderAssociationConfigCommand } from "./IModelOrderAssociationConfigCommand";
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
    isVariation: boolean;
  }[];
  modelEvents: IEventCommand[];
  states: IModelStateUpdateCommand[];
  subStates: IModelStateUpdateCommand[];

  isForSale: boolean;
  priceFieldId?: string;
  quantityFieldId?: string;
  imageFieldId?: string;
  showInSideMenu?: boolean;

  isForOrders: boolean;
  orderAssociationConfig?: IModelOrderAssociationConfigCommand;

  language: string;
}

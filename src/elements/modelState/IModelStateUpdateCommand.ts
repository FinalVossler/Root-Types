import { ModelStateTypeEnum } from "./IModelStateReadDto";

export interface IModelStateUpdateCommand {
  _id?: string;
  name: string;
  stateType: ModelStateTypeEnum;
  exclusive: boolean;
  language: string;
}

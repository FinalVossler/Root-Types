import { ModelStateTypeEnum } from "./IModelStateReadDto";

export interface IModelStateCreateCommand {
  name: string;
  stateType: ModelStateTypeEnum;
  exclusive: boolean;
  language: string;
}

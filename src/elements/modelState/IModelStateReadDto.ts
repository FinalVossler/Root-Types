import { ITranslatedText } from "../../globalTypes/ITranslatedText";

export enum ModelStateTypeEnum {
  ParentState = "ParentState",
  SubState = "SubState",
}

export interface IModelStateReadDto {
  _id: string;
  name: ITranslatedText[];
  stateType: ModelStateTypeEnum;
  exlusive?: boolean;
}

import { ITranslatedText } from "../../globalTypes/ITranslatedText";

export enum EntityEventNotificationTriggerEnum {
  OnCreate = "OnCreate",
  OnUpdate = "OnUpdate",
  OnAssigned = "OnAssigned", // This is for the first time the user is assigned to the entity
  OnUpdateWhenAssigned = "OnUpdateWhenAssigned",
}

export interface IEntityEventNotificationReadDto {
  _id: string;
  title: ITranslatedText[];
  text: ITranslatedText[];
  trigger: EntityEventNotificationTriggerEnum;
}

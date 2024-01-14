import { ITranslatedText } from "../../globalTypes/ITranslatedText";

export enum EntityEventNotificationTriggerEnum {
  OnCreate = "OnCreate",
  OnAssigned = "OnAssigned",
}

export interface IEntityEventNotificationReadDto {
  _id: string;
  title: ITranslatedText[];
  text: ITranslatedText[];
  trigger: EntityEventNotificationTriggerEnum;
}

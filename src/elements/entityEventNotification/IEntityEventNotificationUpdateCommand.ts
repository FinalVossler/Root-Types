import { EntityEventNotificationTriggerEnum } from "./IEntityEventNotificationReadDto";

export interface IEntityEventNotificationUpdateCommand {
  _id?: string;
  title: string;
  text: string;
  trigger: EntityEventNotificationTriggerEnum;
  language: string;
}

import { EntityEventNotificationTriggerEnum } from "./IEntityEventNotificationReadDto";

export interface IEntityEventNotificationCreateCommand {
  title: string;
  text: string;
  trigger: EntityEventNotificationTriggerEnum;
  language: string;
}

import {
  EventTriggerEnum,
  EventTypeEnum,
  IEventRequestHeaderReadDto,
} from "./IEventReadDto";

export interface IEventCommand {
  eventTrigger: EventTriggerEnum;
  eventType: EventTypeEnum;

  // Redirection options
  redirectionUrl: string;
  redirectionToSelf: boolean;

  // API call options
  requestMethod: string;
  requestUrl: string;
  requestDataIsCreatedEntity: boolean;
  requestData: string;
  requestHeaders: IEventRequestHeaderReadDto[];

  microFrontendId?: string;
  microFrontendComponentId?: string;
}

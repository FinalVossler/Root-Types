import { IMicroFrontendReadDto } from "../microFontend/IMicroFrontendReadDto";

export enum EventTriggerEnum {
  OnCreate = "OnCreate",
  OnUpdate = "OnUpdate",
  OnClick = "OnClick",
}

export enum EventTypeEnum {
  ApiCall = "ApiCall",
  Redirection = "Redirection",
  MicroFrontendRedirection = "MicroFrontendRedirection",
}

export interface IEventRequestHeaderReadDto {
  key: string;
  value: string;
}

export interface IEventReadDto {
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

  // Microfrontend redirection
  microFrontend?: IMicroFrontendReadDto | string;
  microFrontendComponentId?: string;
}

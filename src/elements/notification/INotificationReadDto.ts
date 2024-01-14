import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IFileReadDto } from "../file/IFileReadDto";

export enum NotificationMessageEnum {
  Receive = "NotificationReceive",
}

export interface INotificationReadDto {
  _id: string;
  text: ITranslatedText[];
  link: string;
  image: IFileReadDto;
  to: string[];
  clickedBy: string[];

  createdAt: string;
  updatedAt: string;
}

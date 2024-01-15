import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IFileReadDto } from "../file/IFileReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

export enum NotificationMessageEnum {
  Receive = "NotificationReceive",
}

export interface INotificationReadDto {
  _id: string;
  text: ITranslatedText[];
  link: string;
  image?: IFileReadDto | string;
  to: (IUserReadDto | string)[];
  clickedBy: (IUserReadDto | string)[];

  createdAt: string;
  updatedAt: string;
}

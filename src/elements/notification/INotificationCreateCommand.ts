import { ITranslatedText } from "../../globalTypes/ITranslatedText";

export interface INotificationCreateCommand {
  text: ITranslatedText[];
  link: string;
  imageId: string;
  toIds: string[];
}

import { ITranslatedText } from "../../globalTypes/ITranslatedText";

export interface IFieldTableElementCreateCommand {
  name: string | ITranslatedText[];
  language: string;
}

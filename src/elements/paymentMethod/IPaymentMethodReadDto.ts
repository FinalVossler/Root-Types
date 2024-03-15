import { ITranslatedText } from "../../globalTypes/ITranslatedText";

export interface IPaymentMethodReadDto {
  _id: string;
  name: ITranslatedText[];
  slug: string;
}

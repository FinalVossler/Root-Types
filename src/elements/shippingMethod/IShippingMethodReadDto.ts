import { ITranslatedText } from "../../globalTypes/ITranslatedText";

export interface IShippingMethodReadDto {
  _id: string;
  name: ITranslatedText[];
  price: number;
}

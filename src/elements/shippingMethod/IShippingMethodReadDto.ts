import { ITranslatedText } from "../../globalTypes/ITranslatedText";

export interface IShippingMethodReadDto {
  name: ITranslatedText[];
  price: number;
}

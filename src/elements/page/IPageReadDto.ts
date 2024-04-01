import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IPostReadDto } from "../post/IPostReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

export interface IPageReadDto {
  _id: string;
  title: ITranslatedText[];
  slug: string;
  posts: (IPostReadDto | string)[];
  showInHeader: boolean;
  showInSideMenu: boolean;
}

import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IFileReadDto } from "../file/IFileReadDto";

export enum PostVisibilityEnum {
  Private = "Private",
  Public = "Public",
  Connections = "Connections",
}

export enum PostDesignEnum {
  Default = "Default",
  Spacing = "Spacing",
  Card = "Card",
  fullWidthPicture = "FullWidthPicture",
  TitleAndText = "TitleAndText",
  Banner = "Banner",
  TitleImageAndText = "TitleImageAndText",
  ChildrenContainer = "ChildrenContainer",
  RotatingCarzd = "RotatingCard",
  AnimatedTitle = "AnimatedTitle",
  UnderlinedTitle = "UnderinedTitle",
  Footer = "Footer",
  ContactForm = "ContactForm",
  Person = "Person",
  Card2 = "Card2",
  Video = "Video",
  ModelForm = "ModelForm",
  ModelList = "ModelList",
}

export interface IPostReadDto {
  _id: string;
  title?: ITranslatedText[];
  subTitle?: ITranslatedText[];
  posterId: string;
  content?: ITranslatedText[];
  files: IFileReadDto[];
  visibility: PostVisibilityEnum;
  design: PostDesignEnum;
  children: IPostReadDto[];
  code?: string;

  createdAt: string;
  updatedAt: string;
}

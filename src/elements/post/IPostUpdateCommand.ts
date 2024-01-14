import { IFileCreateCommand } from "../file/IFileCreateCommand";
import { PostDesignEnum, PostVisibilityEnum } from "./IPostReadDto";

export interface IPostUpdateCommand {
  _id: string;
  title?: string;
  subTitle?: string;
  content?: string;
  files: IFileCreateCommand[];
  visibility: PostVisibilityEnum;
  design: PostDesignEnum;
  children: string[];
  language: string;
  code?: string;
}

import { IFileCreateCommand } from "../file/IFileCreateCommand";
import { PostDesignEnum, PostVisibilityEnum } from "./IPostReadDto";

export interface IPostCreateCommand {
  title?: string;
  subTitle?: string;
  posterId: string;
  content?: string;
  files: IFileCreateCommand[];
  visibility: PostVisibilityEnum;
  design: PostDesignEnum;
  children: string[];
  language: string;
  code?: string;
}

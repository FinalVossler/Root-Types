import { IFileCommand } from "../file/IFileCommand";
import { PostDesignEnum, PostVisibilityEnum } from "./IPostReadDto";

export interface IPostCreateCommand {
  title?: string;
  subTitle?: string;
  posterId: string;
  content?: string;
  files: IFileCommand[];
  visibility: PostVisibilityEnum;
  design: PostDesignEnum;
  children: string[];
  language: string;
  code?: string;
}

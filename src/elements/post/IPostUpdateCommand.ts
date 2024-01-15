import { IFileCommand } from "../file/IFileCommand";
import { PostDesignEnum, PostVisibilityEnum } from "./IPostReadDto";

export interface IPostUpdateCommand {
  _id: string;
  title?: string;
  subTitle?: string;
  content?: string;
  files: IFileCommand[];
  visibility: PostVisibilityEnum;
  design: PostDesignEnum;
  children: string[];
  language: string;
  code?: string;
}

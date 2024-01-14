import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";
import { PostVisibilityEnum } from "./IPostReadDto";

export interface IPostsSearchCommand {
  title: string;
  visibilities: PostVisibilityEnum[];
  posterId: string;
  paginationCommand: IPaginationCommand;
}

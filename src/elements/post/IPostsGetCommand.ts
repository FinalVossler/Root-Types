import { PostVisibilityEnum } from "./IPostReadDto";
import { IPaginationCommand } from "../../globalTypes/IPaginationCommand";

export interface IPostsGetCommand {
  userId: string;
  visibilities: PostVisibilityEnum[];
  paginationCommand: IPaginationCommand;
}

import { IFileCreateCommand } from "../file/IFileCreateCommand";

export interface IUserUpdateProfilePictureCommand {
  userId: string;
  picture: IFileCreateCommand;
}

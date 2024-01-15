import { IFileCommand } from "../file/IFileCommand";

export interface IUserUpdateProfilePictureCommand {
  userId: string;
  picture: IFileCommand;
}

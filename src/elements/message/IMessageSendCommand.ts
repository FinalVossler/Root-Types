import { IFileCreateCommand } from "../file/IFileCreateCommand";

export interface IMessageSendCommand {
  from: string;
  to: string[];
  message: string;
  files: IFileCreateCommand[];
}

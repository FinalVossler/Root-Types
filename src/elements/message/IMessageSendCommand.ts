import { IFileCommand } from "../file/IFileCommand";

export interface IMessageSendCommand {
  from: string;
  to: string[];
  message: string;
  files: IFileCommand[];
}

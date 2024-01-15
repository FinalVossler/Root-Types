import { IFileReadDto } from "../file/IFileReadDto";
import { IMessageReadDto } from "../message/IMessageReadDto";
import { IRoleReadDto } from "../role/IRoleReadDto";

export enum SuperRoleEnum {
  SuperAdmin = "SuperAdmin",
  Normal = "Normal",
}

export interface IUserReadDto {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: IFileReadDto | string;
  superRole: SuperRoleEnum;
  role?: IRoleReadDto | string;
  hasMessagingEmailsActivated?: boolean;
}

export interface IUserReadDtoWithLastReadMessageInConversationReadDto
  extends IUserReadDto {
  to: string[];
  lastReadMessageInConversation: IMessageReadDto | null;
}

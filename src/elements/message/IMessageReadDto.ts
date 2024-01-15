import { IFileReadDto } from "../file/IFileReadDto";
import { IReactionReadDto } from "../reaction/IReactionReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

export enum ChatMessagesEnum {
  Receive = "ChatReceive",
  Delete = "ChatDelete",
  ReaceiveReaction = "ReaceiveReaction",
  SendTypingState = "SendTypingState",
  ReceiveTypingState = "SendTypingState",
  ReceiveLastMarkedMessageAsReadByUser = "ReceiveLastMarkedMessageAsReadByUser",
}

export interface IMessageReadDto {
  _id: string;
  from: string | IUserReadDto;
  to: string[] | IUserReadDto[];
  message: string;
  read: string[] | IUserReadDto[];
  readAt?: string[];
  files: IFileReadDto[];
  totalUnreadMessages?: number;
  reactions?: IReactionReadDto[];
  createdAt: string;
  updatedAt: string;
}

export interface IPopulatedMessageReadDto {
  _id: string;
  from: IUserReadDto;
  to: IUserReadDto[];
  message: string;
  read: IUserReadDto[];
  readAt?: string[];
  files: IFileReadDto[];
  totalUnreadMessages?: number;
  reactions?: IReactionReadDto[];
  createdAt: string;
  updatedAt: string;
}

import { IUserReadDto } from "../elements/user/IUserReadDto";

export interface ISocketTypingStateCommand {
  userId: string;
  user: IUserReadDto;
  toUsersIds: string[];
  isTyping: boolean;
}

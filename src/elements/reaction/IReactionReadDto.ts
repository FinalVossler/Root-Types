import { IUserReadDto } from "../user/IUserReadDto";

export enum ReactionEnum {
  Love = "Love",
  Laugh = "Laugh",
  Shock = "Shock",
  Cry = "Cry",
  Angry = "Angry",
  OK = "OK",
}

export interface IReactionReadDto {
  _id: string;
  user: IUserReadDto | string;
  reaction: ReactionEnum;

  createdAt: string;
  updatedAt: string;
}

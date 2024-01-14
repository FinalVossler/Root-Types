import { ReactionEnum } from "./IReactionReadDto";

export interface IReactionCreateCommand {
  messageId: string;
  reaction: ReactionEnum;
}

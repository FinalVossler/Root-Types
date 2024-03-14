import { IEntityReadDto } from "../entity/IEntityReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

export interface ICartReadDto {
  user: IUserReadDto | string;
  products: {
    quantiy: number;
    product: IEntityReadDto | string;
  }[];
}

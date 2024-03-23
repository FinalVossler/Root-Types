import { IEntityReadDto } from "../entity/IEntityReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

export interface ICartReadDto {
  _id: string;
  user: IUserReadDto | string;
  products: {
    quantity: number;
    product: IEntityReadDto | string;
    sided: boolean;
  }[];
}

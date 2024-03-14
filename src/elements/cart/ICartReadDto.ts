import { IEntityReadDto } from "../entity/IEntityReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

interface ICartReadDto {
  user: IUserReadDto | string;
  products: {
    quantiy: number;
    product: IEntityReadDto | string;
  };
}

export default ICartReadDto;

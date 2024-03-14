export interface ICartUpdateCommand {
  userId: string;
  products: {
    quantiy: number;
    productId: string;
  }[];
}

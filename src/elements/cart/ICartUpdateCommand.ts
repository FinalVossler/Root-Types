export interface ICartUpdateCommand {
  userId: string;
  products: {
    quantity: number;
    productId: string;
  }[];
}

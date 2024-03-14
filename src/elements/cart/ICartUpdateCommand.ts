interface ICartUpdateCommand {
  cartId: string;
  products: {
    quantiy: number;
    productId: string;
  }[];
}

export default ICartUpdateCommand;

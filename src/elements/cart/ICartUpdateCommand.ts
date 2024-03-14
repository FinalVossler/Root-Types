interface ICartUpdateCommand {
  userId: string;
  products: {
    quantiy: number;
    productId: string;
  }[];
}

export default ICartUpdateCommand;

interface ICartUpdateCommand {
  products: {
    quantiy: number;
    productId: string;
  }[];
}

export default ICartUpdateCommand;

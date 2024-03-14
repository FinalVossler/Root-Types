import OrderStatusEnum from "./OrderStatusEnum";

export interface IOrderCreateCommand {
  userId: string;
  date: string;
  total: number;
  status: OrderStatusEnum;
  shippingMethodId: string;
  shippingAddress: {
    country: string;
    postalCode: string;
    addressLine1: string;
    addressLine2: string;
    region: string;
    city: string;
  };

  products: {
    productId: string;
    quantity: string;
    price: number;
  }[];
}

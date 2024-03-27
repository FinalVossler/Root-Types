import OrderStatusEnum from "./OrderStatusEnum";

export interface IOrderCreateCommand {
  userId: string;
  date: string;
  status: OrderStatusEnum;
  shippingMethodId: string;
  paymentMethodId: string;
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
    quantity: number;
    price: number;
  }[];
}

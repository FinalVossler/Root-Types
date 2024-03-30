import { IShippingMethodReadDto } from "../shippingMethod/IShippingMethodReadDto";
import OrderStatusEnum from "./OrderStatusEnum";

export interface IOrderCreateCommand {
  userId: string;
  date: string;
  status: OrderStatusEnum;
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
    shippingMethod: IShippingMethodReadDto | string;
  }[];
}

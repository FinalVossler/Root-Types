import { IShippingMethodReadDto } from "../shippingMethod/IShippingMethodReadDto";
import OrderPaymentStatusEnum from "./OrderPaymentStatusEnum";

export interface IOrderCreateCommand {
  userId: string;
  date: string;
  paymentStatus: OrderPaymentStatusEnum;
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
    shippingMethodId: string;
  }[];
}

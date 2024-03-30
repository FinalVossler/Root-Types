import { IEntityReadDto } from "../entity/IEntityReadDto";
import { IModelOrderAssociationConfig } from "../model/IModelReadDto";
import { IPaymentMethodReadDto } from "../paymentMethod/IPaymentMethodReadDto";
import { IShippingMethodReadDto } from "../shippingMethod/IShippingMethodReadDto";
import { IUserReadDto } from "../user/IUserReadDto";
import OrderNegativeStatusEnum from "./OrderNegativeStatusEnum";
import OrderStatusEnum from "./OrderStatusEnum";

export interface IOrderReadDto {
  _id: string;
  user: IUserReadDto | string;
  number: string;
  date: string;
  total: number;
  status: OrderStatusEnum;
  negativeStatus?: OrderNegativeStatusEnum;
  paymentMethod: IPaymentMethodReadDto | string;
  shippingAddress: {
    country: string;
    postalCode: string;
    addressLine1: string;
    addressLine2: string;
    region: string;
    city: string;
  };

  products: {
    product: IEntityReadDto | string;
    quantity: number;
    price: number;
    shippingMethod: IShippingMethodReadDto | string;
  }[];

  checkoutSessionId: string;
  checkoutSessionUrl: string;
}

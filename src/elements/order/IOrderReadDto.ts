import { IShippingMethodReadDto } from "../shippingMethod/IShippingMethodReadDto";
import { IUserReadDto } from "../user/IUserReadDto";
import OrderStatusEnum from "./OrderStatusEnum";

export interface IOrder {
  user: IUserReadDto | string;
  date: string;
  total: number;
  status: OrderStatusEnum;
  shippingMethod: IShippingMethodReadDto | string;
  shippingAddress: {
    country: string;
    postalCode: string;
    addressLine1: string;
    addressLine2: string;
    region: string;
    city: string;
  };
}
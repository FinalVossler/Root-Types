import { OrderPaymentMethodEnum } from "./OrderPaymentMethodEnum";

export interface IOrderCheckboutCommand {
  orderId: string;
  paymentMethod: OrderPaymentMethodEnum;
}

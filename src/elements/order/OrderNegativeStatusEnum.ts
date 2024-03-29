export enum OrderNegativeStatusEnum {
  Cancelleted = "Cancelled", // If the customer or seller cancels the order before it's fulfilled or delivered, the status may change to "Cancelled." This could happen for various reasons such as the customer changing their mind or the seller being unable to fulfill the order.
  OnHold = "OnHold", // Sometimes, orders may be put on hold for various reasons, such as awaiting additional information from the customer or experiencing inventory issues. The status "On Hold" indicates that the order is temporarily suspended until further action is taken.
  Refunded = "Refunded", // If the order is refunded either partially or fully, its status may be updated to "Refunded" to indicate that the transaction has been reversed.
}

export default OrderNegativeStatusEnum;

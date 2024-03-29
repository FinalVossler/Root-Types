export enum OrderStatusEnum {
  Pending = "Pending", // This is the initial status of an order when it's first placed by the customer but hasn't been processed yet by the seller.
  Paid = "Paid",
  Processing = "Processing", // Once the seller begins to fulfill the order, it moves into the processing status. This typically involves activities such as picking and packing the items.
  InTransit = "InTransit", // Once the order has been packed and handed over to the shipping carrier, its status changes to "In Transit." This indicates that the package is on its way to the customer but hasn't been delivered yet.
  OutForDelivery = "OutForDelivery", // This status means that the package is currently with the delivery carrier and is out for delivery to the customer's address.
  Delivered = "Delivered", // When the package reaches its destination and is successfully delivered to the customer, the status changes to "Delivered."
  Compeleted = "Completed", // Some e-commerce platforms may have a "Completed" status to indicate that the entire order process, including delivery and any necessary follow-up actions, has been completed successfully.
}

export default OrderStatusEnum;

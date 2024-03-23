export interface IAddressUpdateCommand {
  _id: string;
  country: string;
  postalCode: string;
  addressLine1: string;
  addressLine2: string;
  region: string;
  city: string;

  userId?: string;
}

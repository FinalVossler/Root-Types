import { IUserReadDto } from "../user/IUserReadDto";

export interface IAddressReadDto {
  _id: string;
  country: string;
  postalCode: string;
  addressLine1: string;
  addressLine2: string;
  region: string;
  city: string;

  user?: IUserReadDto | string;
  isDefault?: boolean;
}

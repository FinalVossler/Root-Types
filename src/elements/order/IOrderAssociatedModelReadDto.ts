import { IModelReadDto } from "../model/IModelReadDto";
import { OrderModelAssociationPermissionEnum } from "./OrderModelAssociationPermissionEnum";
import { OrderModelAssociaztionLevelEnum } from "./OrderModelAssociaztionLevelEnum";

export interface IOrderAssociatedModelReadDto {
  model: IModelReadDto | string;
  orderModelAssociationType: OrderModelAssociationPermissionEnum;
  orderModelAssociationLevel: OrderModelAssociaztionLevelEnum;
  IsList: boolean;
}

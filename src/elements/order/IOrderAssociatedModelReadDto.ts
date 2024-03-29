import { IModelReadDto } from "../model/IModelReadDto";
import { OrderModelAssociationPermissionEnum } from "./OrderModelAssociationPermissionEnum";
import { OrderModelAssociaztionLevelEnum } from "./OrderModelAssociaztionLevelEnum";

export interface IOrderAssociatedModelReadDto {
  modelId: string;
  orderModelAssociationType: OrderModelAssociationPermissionEnum;
  orderModelAssociationLevel: OrderModelAssociaztionLevelEnum;
  IsList: boolean;
}

import {
  ModelOrderAssociationLevelEnum,
  ModelOrderAssociationPermissionEnum,
} from "./IModelReadDto";

export interface IModelOrderAssociationConfigCommand {
  modelOrderAssociationPermission: ModelOrderAssociationPermissionEnum;
  modelOrderAssociationLevel: ModelOrderAssociationLevelEnum;
  isList: boolean;
}

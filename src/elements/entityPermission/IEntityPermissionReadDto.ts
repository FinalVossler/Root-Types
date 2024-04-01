import { IEntityEventNotificationReadDto } from "../entityEventNotification/IEntityEventNotificationReadDto";
import { IFieldReadDto } from "../field/IFieldReadDto";
import { IModelReadDto } from "../model/IModelReadDto";
import { IRoleReadDto } from "../role/IRoleReadDto";
import { EntityStaticPermissionEnum } from "./EntityStaticPermissionEnum";

export interface IEntityPermissionReadDto {
  _id: string;
  model: IModelReadDto | string;
  permissions: EntityStaticPermissionEnum[];
  entityFieldPermissions: IEntityFieldPermissionReadDto[];
  entityEventNotifications: IEntityEventNotificationReadDto[];
  entityUserAssignmentPermissionsByRole?: IEntityUserAssignmentPermissionsByRoleReadDto;
}

export interface IEntityFieldPermissionReadDto {
  field: IFieldReadDto | string;
  permissions: EntityStaticPermissionEnum[];
}

export interface IEntityUserAssignmentPermissionsByRoleReadDto {
  canAssignToUserFromSameRole: boolean;
  otherRoles: (IRoleReadDto | string)[];
}

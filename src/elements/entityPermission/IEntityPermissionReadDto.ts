import { IEntityEventNotificationReadDto } from "../entityEventNotification/IEntityEventNotificationReadDto";
import { IFieldReadDto } from "../field/IFieldReadDto";
import { IModelReadDto } from "../model/IModelReadDto";
import { IRoleReadDto } from "../role/IRoleReadDto";

export enum StaticPermissionEnum {
  Create = "Create",
  Read = "Read",
  Update = "Update",
  Delete = "Delete",
}

export interface IEntityPermissionReadDto {
  _id: string;
  model: IModelReadDto;
  permissions: StaticPermissionEnum[];
  entityFieldPermissions: IFieldPermission[];
  entityEventNotifications: IEntityEventNotificationReadDto[];
  entityUserAssignmentPermissionsByRole?: {
    canAssignToUserFromSameRole: boolean;
    otherRoles: IRoleReadDto[];
  };
}

export interface IFieldPermission {
  field: IFieldReadDto;
  permissions: StaticPermissionEnum[];
}

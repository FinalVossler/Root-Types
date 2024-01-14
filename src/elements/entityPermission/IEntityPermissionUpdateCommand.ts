import { IEntityEventNotificationUpdateCommand } from "../entityEventNotification/IEntityEventNotificationUpdateCommand";
import { StaticPermissionEnum } from "./IEntityPermissionReadDto";

export interface IEntityPermissionUpdateCommand {
  _id?: string;
  modelId: string;
  permissions: StaticPermissionEnum[];
  entityFieldPermissions: {
    fieldId: string;
    permissions: StaticPermissionEnum[];
  }[];
  entityEventNotifications: IEntityEventNotificationUpdateCommand[];
  entityUserAssignmentPermissionsByRole: {
    // used to also add the current role that's just been added
    canAssignToUserFromSameRole: boolean;
    otherRolesIds: string[];
  };
  language: string;
}

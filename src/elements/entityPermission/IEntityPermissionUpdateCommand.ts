import { IEntityEventNotificationUpdateCommand } from "../entityEventNotification/IEntityEventNotificationUpdateCommand";
import { EntityStaticPermissionEnum } from "./EntityStaticPermissionEnum";

export interface IEntityPermissionUpdateCommand {
  _id?: string;
  modelId: string;
  permissions: EntityStaticPermissionEnum[];
  entityFieldPermissions: {
    fieldId: string;
    permissions: EntityStaticPermissionEnum[];
  }[];
  entityEventNotifications: IEntityEventNotificationUpdateCommand[];
  entityUserAssignmentPermissionsByRole: {
    // used to also add the current role that's just been added
    canAssignToUserFromSameRole: boolean;
    otherRolesIds: string[];
  };
  language: string;
}

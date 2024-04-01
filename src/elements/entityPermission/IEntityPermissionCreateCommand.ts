import { IEntityEventNotificationCreateCommand } from "../entityEventNotification/IEntityEventNotificationCreateCommand";
import { EntityStaticPermissionEnum } from "./EntityStaticPermissionEnum";

export interface IEntityPermissionCreateCommand {
  modelId: string;
  permissions: EntityStaticPermissionEnum[];
  entityFieldPermissions: {
    fieldId: string;
    permissions: EntityStaticPermissionEnum[];
  }[];
  entityEventNotifications: IEntityEventNotificationCreateCommand[];
  entityUserAssignmentPermissionsByRole: {
    // used to also add the current role that's just been added
    canAssignToUserFromSameRole: boolean;
    otherRolesIds: string[];
  };
  language: string;
}

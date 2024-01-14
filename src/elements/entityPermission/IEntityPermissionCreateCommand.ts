import { IEntityEventNotificationCreateCommand } from "../entityEventNotification/IEntityEventNotificationCreateCommand";
import { StaticPermissionEnum } from "./IEntityPermissionReadDto";

export interface IEntityPermissionCreateCommand {
  modelId: string;
  permissions: StaticPermissionEnum[];
  entityFieldPermissions: {
    fieldId: string;
    permissions: StaticPermissionEnum[];
  }[];
  entityEventNotifications: IEntityEventNotificationCreateCommand[];
  entityUserAssignmentPermissionsByRole: {
    // used to also add the current role that's just been added
    canAssignToUserFromSameRole: boolean;
    otherRolesIds: string[];
  };
  language: string;
}

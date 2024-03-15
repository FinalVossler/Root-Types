import { IEntityPermissionCreateCommand } from "../entityPermission/IEntityPermissionCreateCommand";
import { PermissionEnum } from "./PermissionEnum";

export interface IRoleCreateCommand {
  name: string;
  language: string;
  permissions: PermissionEnum[];
  entityPermissions: IEntityPermissionCreateCommand[];
}

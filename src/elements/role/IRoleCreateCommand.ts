import { IEntityPermissionCreateCommand } from "../entityPermission/IEntityPermissionCreateCommand";
import { PermissionEnum } from "./IRoleReadDto";

export interface IRoleCreateCommand {
  name: string;
  language: string;
  permissions: PermissionEnum[];
  entityPermissions: IEntityPermissionCreateCommand[];
}

import { IEntityPermissionUpdateCommand } from "../entityPermission/IEntityPermissionUpdateCommand";
import { PermissionEnum } from "./IRoleReadDto";

export interface IRoleUpdateCommand {
  _id: string;
  name: string;
  language: string;
  permissions: PermissionEnum[];

  entityPermissions: IEntityPermissionUpdateCommand[];
}

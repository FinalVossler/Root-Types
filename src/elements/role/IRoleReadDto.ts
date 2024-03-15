import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IEntityPermissionReadDto } from "../entityPermission/IEntityPermissionReadDto";
import { PermissionEnum } from "./PermissionEnum";

export interface IRoleReadDto {
  _id: string;
  name: ITranslatedText[];
  permissions: PermissionEnum[];
  entityPermissions: (IEntityPermissionReadDto | string)[];

  createdAt: string;
  updatedAt: string;
}

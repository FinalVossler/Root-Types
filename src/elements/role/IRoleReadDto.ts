import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IEntityPermissionReadDto } from "../entityPermission/IEntityPermissionReadDto";

export enum PermissionEnum {
  EditConfiguration = "EditConfiguration",

  CreatePage = "CreatePage",
  ReadPage = "ReadPage",
  UpdatePage = "UpdatePage",
  DeletePage = "DeletePage",

  CreatePost = "CreatePost",

  CreateField = "CreateField",
  ReadField = "ReadField",
  UpdateField = "UpdateField",
  DeleteField = "DeleteField",

  CreateModel = "CreateModel",
  ReadModel = "ReadModel",
  UpdateModel = "UpdateModel",
  DeleteModel = "DeleteModel",

  CreateUser = "CreateUser",
  ReadUser = "ReadUser",
  UpdateUser = "UpdateUser",
  DeleteUser = "DeleteUser",

  CreateRole = "CreateRole",
  ReadRole = "ReadRole",
  UpdateRole = "UpdateRole",
  DeleteRole = "DeleteRole",

  ReadMicroFrontend = "ReadMicroFrontend",
  CreateMicroFrontend = "CreateMicroFrontend",
  UpdateMicroFrontend = "UpdateMicroFrontend",
  DeleteMicroFrontend = "DeleteMicroFrontend",
}

export interface IRoleReadDto {
  _id: string;
  name: ITranslatedText[];
  permissions: PermissionEnum[];
  entityPermissions: IEntityPermissionReadDto[];

  createdAt: string;
  updatedAt: string;
}

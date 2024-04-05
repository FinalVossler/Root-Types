import { IFileCommand } from "../file/IFileCommand";
import { ITheme } from "./IWebsiteConfigurationReadDto";

export interface IWebsiteConfigurationUpdateCommand {
  title: string;
  description: string;
  email: string;
  phoneNumber: string;
  tabTitle: string;
  mainLanguages: string[];
  withChat: boolean;
  withRegistration: boolean;
  withTaskManagement: boolean;
  withEcommerce: boolean;
  theme: ITheme;
  tabIcon?: IFileCommand;
  logo1?: IFileCommand;
  logo2?: IFileCommand;
  language: string;
  staticText: Object;
  automaticallyAssignedRoleIdAtRegistration?: string;
  isSideMenuOpenByDefault: boolean;
}

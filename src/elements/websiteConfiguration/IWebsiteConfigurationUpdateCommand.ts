import { IFileReadDto } from "../file/IFileReadDto";
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
  theme: ITheme;
  tabIcon?: IFileReadDto;
  logo1?: IFileReadDto;
  logo2?: IFileReadDto;
  language: string;
}

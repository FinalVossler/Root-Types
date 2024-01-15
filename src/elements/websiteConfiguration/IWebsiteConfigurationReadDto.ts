import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IFileReadDto } from "../file/IFileReadDto";

export interface ITheme {
  darkTextColor: string;
  lightTextColor: string;
  primary: string;
  darkerPrimary: string;
  lighterPrimary: string;
  secondary: string;
  errorColor: string;
  borderColor: string;
  formMaxWidth: string;
  backgroundColor: string;
  contentBackgroundColor: string;
  boxColor: string;
  transparentBackground: string;
  subContentBackgroundColor: string;
  boxShadow: string;
}

export interface IWebsiteConfigurationReadDto {
  _id?: string;
  title?: string;
  description?: ITranslatedText[];
  email?: string;
  phoneNumber?: string;
  tabTitle?: string;
  mainLanguages: string[];
  withChat?: boolean;
  withRegistration?: boolean;
  withTaskManagement?: boolean;
  theme: ITheme;
  tabIcon: IFileReadDto | string;
  logo1?: IFileReadDto | string;
  logo2?: IFileReadDto | string;

  staticText?: any;
}

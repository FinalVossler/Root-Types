import { ITranslatedText } from "../../globalTypes/ITranslatedText";
import { IEventReadDto } from "../event/IEventReadDto";
import { IFieldReadDto } from "../field/IFieldReadDto";
import { IModelStateReadDto } from "../modelState/IModelStateReadDto";
import { IUserReadDto } from "../user/IUserReadDto";

//#region model fields
export interface IModelFieldReadDto {
  field: IFieldReadDto | string;
  required: boolean;
  conditions?: IModelFieldConditionReadDto[];
  states?: (IModelStateReadDto | string)[];
  mainField?: boolean;
  stickInTable?: boolean;
  isVariation?: boolean;
}

export interface IModelFieldConditionReadDto {
  field?: IFieldReadDto | string;
  conditionType: ModelFieldConditionTypeEnum;
  value?: number | string;
  modelState?: IModelStateReadDto | string;
}

export enum ModelFieldConditionTypeEnum {
  SuperiorTo = "SuperiorTo",
  SuperiorOrEqualTo = "SuperiorOrEqualTo",
  InferiorTo = "InferiorTo",
  InferiorOrEqualTo = "InferiorOrEqualTo",
  Equal = "Equal",
  ValueInferiorOrEqualToCurrentYearPlusValueOfFieldAndSuperiorOrEqualToCurrentYear = "ValueInferiorOrEqualToCurrentYearPlusValueOfFieldAndSuperiorOrEqualToCurrentYear",
  StateConditionsMet = "StateConditionsMet",
  IfYearTableThenNumberOfYearsInTheFutureIsEqualToValueOfField = "IfYearTableThenNumberOfYearsInTheFutureIsEqualToValueOfField",
}

// Association with orders
export enum ModelOrderAssociationLevelEnum {
  OrderLevel = "OrderLevel",
  ProductLevel = "ProductLevel",
}
export enum ModelOrderAssociationPermissionEnum {
  ForSeller = "ForSeller",
  ForBuyer = "ForBuyer",
  ForBothSellerAndBuyer = "ForBothSellerAndBuyer",
}

export interface IModelOrderAssociationConfig {
  modelOrderAssociationPermission: ModelOrderAssociationPermissionEnum;
  modelOrderAssociationLevel: ModelOrderAssociationLevelEnum;
  isList: boolean;
}

export enum ModelViewTypeEnum {
  SectionView = "SectionView",
  LinearView = "LinearView",
}

export enum ModelSectionDirectionEnum {
  Horizontal = "Horizontal",
  Vertical = "Vertical",
}

export enum SectionSpecialFieldEnum {
  None = "None",
  ShippingMethod = "ShippingMethod",
  Quantity = "Quantity",
  AddToCart = "AddToCart",
}

export interface IModelSection {
  direction: ModelSectionDirectionEnum;
  children: IModelSection[];
  uuid: string;
  customData?: { fieldId: string; specialField?: SectionSpecialFieldEnum };
}

export interface IModelReadDto {
  _id: string;
  name: ITranslatedText[];
  modelFields: IModelFieldReadDto[];
  modelEvents?: IEventReadDto[];
  states?: (IModelStateReadDto | string)[];
  subStates?: (IModelStateReadDto | string)[];

  isForSale?: boolean;
  quantityField?: IFieldReadDto | string;
  priceField?: IFieldReadDto | string;
  imageField?: IFieldReadDto | string;
  showInSideMenu?: boolean;

  isForOrders?: boolean;
  orderAssociationConfig?: IModelOrderAssociationConfig;

  owner?: IUserReadDto | string;
  viewType?: ModelViewTypeEnum;
  sections: IModelSection[];

  createdAt: string;
  updatedAt: string;
}

import { IMicroFrontendComponentReadDto } from "../microFontendComponent/IMicroFrontendComponentReadDto";

export interface IMicroFrontendReadDto {
  _id: string;
  name: string;
  remoteEntry: string;
  components: (IMicroFrontendComponentReadDto | string)[];

  createdAt: string;
  updatedAt: string;
}

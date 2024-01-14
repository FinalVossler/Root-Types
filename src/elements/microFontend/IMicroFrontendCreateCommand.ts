import { IMicroFrontendComponentCreateCommand } from "../microFontendComponent/IMicroFrontendComponentCreateCommand";

export interface IMicroFrontendCreateCommand {
  name: string;
  remoteEntry: string;
  components: IMicroFrontendComponentCreateCommand[];
}

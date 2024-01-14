export interface iMicroFrontendUpdateCommand {
  _id: string;
  name: string;
  remoteEntry: string;
  components: {
    _id?: string;
    name: string;
  }[];
}

export interface IPageUpdateCommand {
  _id: string;
  title: string;
  slug?: string;
  posts: string[];
  showInHeader: boolean;
  showInSideMenu: boolean;
  language: string;
}

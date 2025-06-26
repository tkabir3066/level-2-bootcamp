export interface INote {
  title: string;
  content: string;
  category: string;
  tags: {
    label: string;
    color: string;
  };
  pinned: boolean;
}

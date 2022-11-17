export interface Post {
  id: number | string;
  title: string;
  desc?: string;
  created: string | number;
  topics: string[];
  author: string;
}

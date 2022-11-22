export interface Author {
  name: string;
  title: string;
  profileUrl: string;
  avatarUrl: string;
}

export interface Post {
  id: number | string;
  title: string;
  desc?: string;
  created: string | number;
  topics: string[];
  mdContent?: string;
  htmlContent?: string;

  slug: string;
  author?: Author;
}

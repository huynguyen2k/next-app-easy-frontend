export interface Work {
  id: number | string;
  title: string;
  tags: string[];
  shortDesc: string;
  fullDesc: string;
  thumbnailUrl: string;
  createdAt: number | string;
  updatedAt?: number | string;
}

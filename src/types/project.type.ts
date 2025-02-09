export type TProject = {
  _id: string;
  title: string;
  image: string;
  technologies: string[];
  features: string[];
  description: string;
  isFeatured: boolean;
  live_link: string;
  github_link?: string;
  github_link_frontEnd?: string;
  github_link_backEnd?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

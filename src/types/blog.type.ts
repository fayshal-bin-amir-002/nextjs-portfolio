export type TAuthor = {
  _id: string;
  name: string;
  email: string;
  image: string;
};

export type TBlog = {
  _id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: TAuthor;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

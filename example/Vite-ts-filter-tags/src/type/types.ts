export type TagChild = {
  id: string;
  name: string;
};

export type Tag = {
  id: string;
  name: string;
  child: TagChild[];
};

export type Product = {
  id: number;
  title: string;
  content: string;
  url: string;
  tags: string[];
};

export type ApiTagsListResponse = Tag[];

export type ApiTagsProductParams = {
  tag?: string;
  child?: string;
};

export type ApiTagsProductResponse = Product[];


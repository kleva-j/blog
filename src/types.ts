export type ArticleType = {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags?: string[];
  reactions?: {
    likes: number;
    dislikes: number;
  };
  views?: number;
};

export type ArticleFrontmatter = {
  title: string;
  description: string;
  pubDate: Date;
  date: Date;
  draft?: boolean;
  cover?: {
    src: string;
    alt: string;
  };
  tags?: string[];
  author?: string;
};

export type ArticleStyle = {
  containerStyle: string;
  bodyStyle?: string;
  titleStyle: string;
  dateStyle?: string;
};

export type ArticleStyleVariants = "compact" | "default" | "full";

export type ApiPostResponse = {
  posts: ArticleType[];
  total: number;
  skip: number;
  limit: number;
};

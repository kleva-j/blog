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

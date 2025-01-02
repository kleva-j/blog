export type ArticleType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type ArticleStyle = {
  containerStyle: string;
  bodyStyle?: string;
  titleStyle: string;
  dateStyle?: string;
};

export type ArticleStyleVariants = "compact" | "default" | "full";

export type OneUserType = {
  id: number;
  name: string;
  isPro: boolean;
  email: string;
  phone: string;
  pathImg: string;
  about: string;
  telegram: string;
};

export type OneCategoryType = {
  id: number;
  name: string;
};

export type TourType = {
  id: number;
  name: string;
  description: string;
  authorId: number;
  catTId: number;
  pathImg: string;
  location: string;
  date: string;
  endDate: string;
  places: number;
  CategoryTour?: OneCategoryType;
  author: OneUserType;
};

export type TourCountType = {
  count: number;
  rows: [] | TourType[];
};

export type CategoryTourType = {
  id: number;
  name: string;
  Tours: TourType[];
};

export type CommentTourType = {
  id: number;
  title: string;
  userId: number;
  tourId: number;
  img: string;
  name: string;
  User: OneUserType;
};

export type CommentsTypeState = {
  comments: CommentTourType[];
};

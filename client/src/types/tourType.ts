export type TourType = {
  id: number;
  name: string;
  description: string;
  userId: number;
  catTId: number;
  pathImg: string;
  location: string;
  date: string;
  endDate: string;
  places: number;
};

export type CategoryTourType = {
  id: number;
  name: string;
};

export type CommentTourType = {
  id: number;
  title: string;
  userId: number;
  tourId: number;
};

export interface PlaceType {
  title: string;
  registered: string;
  likes: {
    userId: string;
  }[];
  type: string;
  memo: string;
  position: {
    x: string;
    y: string;
  };
  placeUrl: string;
  images: string[];
}

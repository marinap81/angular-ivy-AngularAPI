export interface Book
{
  id?: string; //this can be nullable by adding ? at end of id
  title: string;
  releaseDate: string;
  haveRead: boolean;
  rating: number;
}
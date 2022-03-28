export interface Restfully<T>{
  success: boolean;
  data: T
}
export interface SearchItem{
  name: string;
  age: number;
}
export type SearchResult = SearchItem[]
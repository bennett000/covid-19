export type SelectOptions = (SelectOptionsWithIndex | string)[];

export interface SelectOptionsWithIndex {
  index: number;
  name: string;
}

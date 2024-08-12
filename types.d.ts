export type Clx =
  | string
  | { [key: string]: unknown }
  | Array<Clx>
  | undefined
  | null;

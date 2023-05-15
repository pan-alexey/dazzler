export interface BuildOptions {
  src: string;
  target: string;
  filter: (filepath: string) => boolean;
}

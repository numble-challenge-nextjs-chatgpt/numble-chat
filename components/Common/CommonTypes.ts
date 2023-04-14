export interface ButtonPropsType {
  size: 'L' | 'S';
  color: 'R' | 'B';
}

export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export interface InputPropsType {
  title: string;
}

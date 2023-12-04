import { ReactNode } from "react";

export type FilterContextType = {
  generation: string;
};

export type Action = {
  type: string;
  payload: any;
};

export type FilterProviderProps = {
  children: ReactNode;
};

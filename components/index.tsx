import { ReactNode } from "react";

interface Properties {
  id?: string;
  children?: ReactNode | ReactNode[];
  color?: string;
  className?: string;
}

export interface State {
  checked?: boolean;
}

export default Properties;

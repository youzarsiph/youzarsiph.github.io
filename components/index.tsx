import { ReactNode } from "react";

interface Properties {
  id?: string;
  children?: ReactNode | ReactNode[];
  color?: string;
}

export interface State {
  collapsed?: boolean;
}

export default Properties;

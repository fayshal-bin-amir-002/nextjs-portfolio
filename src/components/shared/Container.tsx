import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-full max-w-7xl mx-auto px-4">{children}</div>;
};

export default Container;

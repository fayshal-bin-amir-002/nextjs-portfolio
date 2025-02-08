import NavBar from "@/components/shared/NavBar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default CommonLayout;

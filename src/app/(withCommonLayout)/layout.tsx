import NavBar from "@/components/shared/NavBar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[100vh-73px]">{children}</div>
    </div>
  );
};

export default CommonLayout;

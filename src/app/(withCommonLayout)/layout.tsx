import NavBar from "@/components/shared/NavBar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

const CommonLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavBar session={session} />
      <div>{children}</div>
    </div>
  );
};

export default CommonLayout;

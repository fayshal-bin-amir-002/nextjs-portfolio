import Footer from "@/components/home/footer/Footer";
import NavBar from "@/components/shared/NavBar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

const CommonLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavBar session={session} />
      <div className="min-h-[75vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;

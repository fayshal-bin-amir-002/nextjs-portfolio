import BubbleCursor from "@/components/animatedCursor/BubbleCursor";
import Footer from "@/components/home/footer/Footer";
import NavBar from "@/components/shared/NavBar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fayshal Bin Amir | Web Developer",
  description:
    "Portfolio of Fayshal Bin Amir, a passionate web developer skilled in NextJS, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose and modern web technologies.",
  keywords:
    "Fayshal Bin Amir, Web Developer, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose, MERN, Full Stack, Portfolio",
};

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-145px)]">{children}</div>
      <Footer />
      <BubbleCursor />
    </div>
  );
};

export default CommonLayout;

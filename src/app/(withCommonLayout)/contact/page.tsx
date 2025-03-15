import ContactForm from "@/components/contact";
import Container from "@/components/shared/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fayshal Bin Amir | Web Developer | Contact",
  description:
    "Portfolio of Fayshal Bin Amir, a passionate web developer skilled in React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose and modern web technologies.",
  keywords:
    "Fayshal Bin Amir, Web Developer, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose, MERN, Full Stack, Portfolio",
};

const ContactPage = () => {
  return (
    <Container>
      <div className="h-full flex justify-center items-center">
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactPage;

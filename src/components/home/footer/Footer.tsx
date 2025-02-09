import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Container from "@/components/shared/Container";
import { Facebook, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-main py-4">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <Link href="/" className="">
              <Image src={logo} width={40} height={40} alt="logo" />
            </Link>
          </div>
          <div className="flex gap-10 justify-center items-center my-6">
            <Link
              href="https://www.facebook.com/foyshal.binamir.3/"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fayshal-bin-amir/"
              target="_blank"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com/fayshal-bin-amir-002"
              target="_blank"
            >
              <Github />
            </Link>
          </div>
          <span className="text-lg text-center block">
            © {new Date().getFullYear()}, All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

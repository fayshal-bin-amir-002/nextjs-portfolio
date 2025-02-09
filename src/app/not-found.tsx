import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="boxShadow min-h-screen h-full w-full flex flex-col lg:flex-row justify-between items-center lg:w-3/4 mx-auto">
      <div className="w-full lg:w-1/2">
        <Image
          width={500}
          height={500}
          src="https://i.ibb.co/HdHH4Pb/Frame-6.png"
          alt="illustration"
          className="h-full"
        />
      </div>

      <div className="w-full lg:w-1/3">
        <h1 className="text-[2.5rem] sm:text-[4rem] font-[800] text-main leading-[80px]">
          OOPS!
        </h1>

        <h3 className="text-main-medium text-xl">Page Not Found!</h3>

        <Link href="/">
          <button className="py-3 px-6 sm:px-8 text-[0.9rem] sm:text-[1rem] rounded-full bg-main text-white mt-8">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

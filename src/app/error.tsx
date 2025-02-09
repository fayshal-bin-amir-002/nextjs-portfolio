"use client";

import { Button } from "@/components/ui/button";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-full md:w-[350px] lg:w-[450px] bg-white p-4 rounded-md shadow-lg space-y-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          An error occurred!
        </h1>
        <p className="text-sm text-gray-600">{error.message}</p>
        <Button
          variant={"outline"}
          size={"lg"}
          onClick={reset}
          className="mt-4 "
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;

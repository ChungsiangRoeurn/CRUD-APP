import CRUDTable from "@/components/ui/CrudTable";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center p-20">
      <div className="w-full h-full justify-center flex flex-col items-center gap-7">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-5xl text-amber-900 font-bold">
            CRUD <span className="text-amber-500 font-bold underline">APP</span>
          </h1>
          <p className="font-semibold text-center text-yellow-900 text-xl w-1/2">
            In this project here, I am using the Nextjs as a frontends, Tailwind
            CSS as a CSS framework and Nodejs as a backend. And also included
            the Typescript and mySQL, as well.
          </p>
        </div>
        <div>
          <CRUDTable />
        </div>
      </div>
    </div>
  );
};

export default page;

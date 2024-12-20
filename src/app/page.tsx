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
          <p className="font-semibold text-yellow-900 text-2xl">
            This is a simple CRUD application using Next.TS, Tailwind CSS, and
            Node.TS
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

import React from "react";
import { users } from "../constants/userItems";
import Link from "next/link";

const CRUDTable: React.FC = () => {
  return (
    <div className="container flex flex-col mx-auto p-4">
      <Link
        href="/user/create"
        className="text-xl bg-green-500 w-fit hover:bg-green-600 duration-300 text-zinc-100 rounded-md px-3 py-1 font-bold mb-4"
      >
        Create User
      </Link>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user.id}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.username}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                <Link
                  href="/user/read"
                  className="bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-blue-600"
                  type="button"
                >
                  Read
                </Link>
                <Link
                  href="/user/update"
                  className="bg-yellow-500 duration-300 text-white px-3 py-1 rounded-2xl hover:bg-yellow-600"
                  type="button"
                >
                  Update
                </Link>
                <Link
                  href=""
                  className="bg-red-500 text-white px-3 py-1 rounded-2xl hover:bg-red-600"
                  type="button"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRUDTable;

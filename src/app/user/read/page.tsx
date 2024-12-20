import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface ReadUserProps {
  user: User;
}

const ReadUser: React.FC<ReadUserProps> = ({ user }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">User Information</h2>
      <div className="bg-white p-6 rounded shadow-md border border-gray-300">
        <div className="mb-4">
          <span className="font-semibold text-gray-700">ID:</span>
          <span className="ml-2 text-gray-600">{user.id}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Name:</span>
          <span className="ml-2 text-gray-600">{user.name}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Email:</span>
          <span className="ml-2 text-gray-600">{user.email}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Username:</span>
          <span className="ml-2 text-gray-600">{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default ReadUser;

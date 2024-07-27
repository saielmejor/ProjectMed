import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <>
    
        {" "}
        <Link
          to="/"
          className="flex items-center font-bold text-xl text-blue-300 mt-2"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center text-xl font-bold text-blue-300 mt-2"
        >
          Dashbaord
        </Link>
        <Link
          to="/manage-claims"
          className="flex items-center text-xl  font-bold text-blue-300 mt-2 mb-5"
        >
          {" "}
          Manage Claims
        </Link>
    

      <Button
        onClick={() => {
          logout();
        }}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out{" "}
      </Button>
    </>
  );
}

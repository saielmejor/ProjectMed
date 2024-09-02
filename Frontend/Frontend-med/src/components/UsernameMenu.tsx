import React from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function UsernameMenu() {
  const { user } = useAuth0();
  const { logout } = useAuth0();
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-blue-500 gap-2">
        <CircleUserRound className="text-blue-500" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" container w-56 h-auto p-5 bg-white ">
        <Link to="/user-profile" className="font-bold hover:text-[#c3c0df] ">
          User Profile{" "}
        </Link>
        <Separator> </Separator>
        <Link to="/user-profile" className="font-bold hover:text-[#c3c0df]">
          Dashboard{" "}
        </Link>
        <Separator/>
        <Link to="/manage-claim" className="font-bold hover:text-[#c3c0df]">
          Manage Claim{" "}
        </Link>
        <DropdownMenuItem>
          
          <Button
            onClick={() => {
              logout();
            }}
            className="flex flex-1 font-bold bg-[#c3c0df]"
          >
            {" "}
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

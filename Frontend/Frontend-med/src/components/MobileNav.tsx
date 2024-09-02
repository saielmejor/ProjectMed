import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Hamburger from "hamburger-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNav() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet >
      <SheetTrigger>
        <Menu></Menu>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center font-bold gap-2 mb-5">
                <CircleUserRound className="text-blue-500"> </CircleUserRound>
                {user?.email}{" "}
              </span>
            ) : (
              <span> Hello MedBill</span>
            )}
          </SheetTitle>
          <SheetDescription > {isAuthenticated ? (
             <MobileNavLinks/>
            ) : (
              <Button onClick={()=>{loginWithRedirect()}} className="flex-1 font-bold text-[#c3c0df]">Log in </Button>
            )}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

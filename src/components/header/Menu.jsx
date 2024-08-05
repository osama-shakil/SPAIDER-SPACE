import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";

const Menu = () => {
  return (
    <Sheet className="bg-github-secondary rounded-l ">
      <SheetTrigger className="bg-github-secondary " asChild>
        <FiMenu className="text-white text-2xl cursor-pointer " />
      </SheetTrigger>
      <SheetContent className="bg-github-secondary rounded-r border-none text-white" side={"left"}>
        <SheetHeader >
        <div className="text-2xl font-bold ">
          <a href="/" className="text-white hover:text-gray-300">
            <span className="text-github-linkcolor">Innovative</span> Solutions
          </a>
        </div>
        </SheetHeader>
       
       
      </SheetContent>
    </Sheet>
  );
};

export default Menu;

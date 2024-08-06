import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import {
  FaUser,
  FaCodeBranch,
  FaExclamationCircle,
  FaCodeMerge,
  FaCog,
  FaStar,
  FaBook,
  FaLifeRing,
  FaUsers,
  FaBuilding,
  FaProjectDiagram,
  FaSmile,
  FaSignOutAlt,
  FaCogs,
  FaRocket,
  FaUserSecret,
  FaBookOpen,
  FaPlay,
  FaClipboardList,
  FaRegStar,
  FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";
import LogoName from "../common/LogoName";

const menuOptions = [
  { icon: FaUser, label: "Your profile" },
  { icon: FaCodeBranch, label: "Your repositories" },
  { icon: FaUserSecret, label: "Your Copilot" },
  { icon: FaProjectDiagram, label: "Your projects" },
  { icon: FaStar, label: "Your stars" },
  { icon: FaBookOpen, label: "Your gists" },
  { icon: FaUsers, label: "Your organizations" },
  { icon: FaBuilding, label: "Your enterprises" },
  { icon: FaRegStar, label: "Your sponsors" },
  { icon: FaRocket, label: "Try Enterprise" },
  { icon: FaClipboardList, label: "Free" },
  { icon: FaLightbulb, label: "Feature preview" },

];
const Menu = () => {
  return (
    <Sheet className="bg-github-secondary rounded-l ">
      <SheetTrigger className="bg-github-secondary " asChild>
        <FiMenu className="text-white text-2xl cursor-pointer " />
      </SheetTrigger>
      <SheetContent
        className="bg-github-secondary rounded-r-2xl border-none text-white"
        side={"left"}
      >
        <SheetHeader>
          {/* Logo */}
          <LogoName />
        </SheetHeader>
        <div className="py-4 mt-4 h-[95vh]">
          <ul className="space-y-1">
            {menuOptions.map((option, index) => (
              <div key={index}>
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-2 text-sm  rounded hover:bg-github-hover"
                  >
                    <span className="text-zinc-500">
                      <option.icon className="mr-2" />
                    </span>
                    {option.label}
                  </Link>
                </li>
                {[
                  "Set status",
                  "Your sponsors",
                  "Settings",
                  "GitHub Community",
                ].includes(option.label) && <hr className="border-gray-700" />}
              </div>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;

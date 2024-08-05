import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import { getInitials } from "@/utils/functions";
import CustomAvatar from "../common/CustomAvatar";
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
  FaLightbulb
} from "react-icons/fa";

const menuOptions = [
  { icon: FaUser, label: "osama-shakil" },
  { icon: FaUser, label: "Muhammad Osama" },
  { icon: FaSmile, label: "Set status" },
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
  { icon: FaCog, label: "Settings" },
  { icon: FaBook, label: "GitHub Docs" },
  { icon: FaLifeRing, label: "GitHub Support" },
  { icon: FaUsers, label: "GitHub Community" },
  { icon: FaSignOutAlt, label: "Sign out" }
];

const AvartarDropDown = ({ firstName, lastName, image }) => (
  <Sheet className="bg-github-secondary rounded-l">
    <SheetTrigger className="bg-github-secondary cursor-pointer" asChild>
      <div>
        <CustomAvatar
          name={getInitials(`${firstName} ${lastName}`)}
          url={image || "https://github.com/shadcn.png"}
        />
      </div>
    </SheetTrigger>
    <SheetContent className="bg-github-secondary rounded-r border-none text-white" side="right">
      <SheetHeader>
        <h3 className="text-lg font-bold">Menu</h3>
      </SheetHeader>
      <div className="p-4 overflow-y-scroll h-[95vh]">
        <ul className="space-y-2">
          {menuOptions.map((option, index) => (
            <div key={index}>
            <li >
              <a href="#" className="flex items-center p-2 rounded hover:bg-github-hover">
                <option.icon className="mr-2" />
                {option.label}
              </a>
            </li>
          {["Set status","Your sponsors", "Settings","GitHub Community"].includes(option.label) && <hr className="border-gray-700"/>}
            </div>

          ))}
        </ul>
      </div>
    </SheetContent>
  </Sheet>
);

export default AvartarDropDown;

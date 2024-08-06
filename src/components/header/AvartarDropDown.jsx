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
import Link from "next/link";

const menuOptions = [

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

const AvartarDropDown = ({ firstName, lastName,email, image }) => (
  <Sheet className="bg-github-secondary rounded-l">
    <SheetTrigger className="bg-github-secondary cursor-pointer" asChild>
      <div>
        <CustomAvatar
          name={getInitials(`${firstName} ${lastName}`)}
          url={image || "https://github.com/shadcn.png"}
        />
      </div>
    </SheetTrigger>
    <SheetContent className="bg-github-secondary rounded-l-2xl  border-none text-white" side="right">
      <SheetHeader>
        <div className="flex items-center gap-3">
        <CustomAvatar
          name={getInitials(`${firstName} ${lastName}`)}
          url={image || "https://github.com/shadcn.png"}
        />
        <span>

        <h2 className="text-lg">{firstName+ " " + lastName}</h2>
        <p className="text-sm text-zinc-300">{email}</p>
        </span>
        
        </div>
       
      </SheetHeader>


      <div className="py-4 mt-4 h-[95vh]">
        <ul className="space-y-1">
          {menuOptions.map((option, index) => (
            <div key={index}>
            <li >
              <Link href="#" className="flex items-center p-2 text-sm  rounded hover:bg-github-hover">
                 <span className="text-zinc-500"><option.icon className="mr-2" /></span>
                {option.label}
              </Link>
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

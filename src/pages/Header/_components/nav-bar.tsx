import NavLink from "./nav-link";
import { NAV_DATA } from "@/lib/constants/paths.constants";

export default function NavBar() {
  return (
    <nav className=" mt-2">
      <ul className="flex gap-4 justify-center">
        {NAV_DATA.map((navLink) => {
          return (
            <NavLink path={navLink.path} key={navLink.lable}>
              <span className="text-base  dark:text-[#F3F3F4] capitalize">{navLink.lable}</span>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

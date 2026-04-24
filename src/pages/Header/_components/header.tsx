import NavBar from "./nav-bar";
import fit from "@/assets/fit.svg";
import { Button } from "@/components/ui/button";
import VectorButton from "@/hooks/shared/vector-btn";
// import LanguageSwitcher from './language-switcher';

export default function HeaderContent() {
  return (
    <>
      <header className="flex items-center gap-6 ">
        <div className="flex-1 flex justify-start items-start">
          <img
            src={fit}
            alt="Super Fitness Logo"
            className="w-[87px] h-[55px]"
          />
        </div>
        <div className="flex-2 ">
          <NavBar />
        </div>

        <div className="flex-1 flex justify-end gap-x-6">
          <VectorButton>Login</VectorButton>
          <VectorButton variant="outline">Sign Up</VectorButton>
        </div>

        {/* Language drop down list */}
        {/* <LanguageSwitcher /> */}
      </header>
    </>
  );
}

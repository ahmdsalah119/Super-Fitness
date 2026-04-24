import NavBar from "./nav-bar";
import fit from "@/assets/fit.svg";
import VectorButton from "@/hooks/shared/vector-btn";
// import LanguageSwitcher from './language-switcher';
import { useNavigate } from 'react-router-dom';

export default function HeaderContent() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleSignUp = () => {
    navigate('/auth/register');
  };

  return (
    <header className="flex items-center justify-between gap-6 px-4 md:px-8 py-4">
      <div className="flex-shrink-0">
        <img
          src={fit}
          alt="Super Fitness Logo"
          className="w-[87px] h-[55px] object-contain"
        />
      </div>
      
      <div className="hidden md:block">
        <NavBar />
      </div>

      <div className="flex items-center gap-x-4 md:gap-x-6">
        <VectorButton onClick={handleLogin}>
          Login
        </VectorButton>
        <VectorButton variant="outline" onClick={handleSignUp}>
          Sign Up
        </VectorButton>
      </div>

      {/* Language drop down list */}
      {/* <LanguageSwitcher /> */}
    </header>
  );
}
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-around gap-8 py-6 text-white bg-[#391DE8] ">
      <HeaderLogo />
      <HeaderMenu />
      <HeaderButton />
    </header>
  );
}

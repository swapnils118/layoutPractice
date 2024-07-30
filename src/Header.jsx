import Icons from "./Icons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <Icons />
    </header>
  );
}

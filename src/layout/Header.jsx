import useLanguage from "../hooks/useLanguage";

const Header = () => {
  const { nextLanguage, toggleLanguage } = useLanguage();

  return (
    <header className="mx-auto container">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5 text-black">
          <h1 className="text-2xl font-semibold">shopday</h1>
        </a>
        <div>
          <a href="/register" className="bp5-button">
            Register
          </a>
          <button className="text-black" onClick={() => toggleLanguage()}>
            {nextLanguage}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

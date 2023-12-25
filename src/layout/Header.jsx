const Header = () => {
  return (
    <header className="mx-auto max-w-7xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 text-black">
            <h1 className="text-2xl font-semibold">shopday</h1>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

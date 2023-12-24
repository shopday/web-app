const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-7xl mt-20">
      <h3 className="absolute top-10 left-10 text-white text-lg">shopday</h3>
      <div className="max-h-[300px] md:max-h-[500px] overflow-hidden">
        <img src="./images/footer.jpg" alt="shopday footer" />
      </div>
      <div className="bg-brand-BG p-10">
        <h4 className="text-2xl font-bold mb-4">
          Got suggestions or
          <br /> questions?
        </h4>
        <p className="font-normal text-gray-600">
          Reach out via email:
          <br />
          <a href="mailto:hello@shopday.io">hello@shopday.io</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

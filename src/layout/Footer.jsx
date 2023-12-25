import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-7xl">
      <h3 className="absolute top-10 left-10 text-white text-lg">shopday</h3>
      <div className="max-h-[300px] md:max-h-[500px] overflow-hidden">
        <img src="./images/footer.jpg" alt="shopday footer" />
      </div>
      <div className="bg-brand-BG p-10">
        <h4 className="text-2xl font-bold mb-4">
          Got suggestions or
          <br /> questions?
        </h4>
        <div className="font-normal text-gray-600 flex flex-col">
          <div className="flex flex-col">
            Reach out via email:
            <br />
            <div>
              <a href="mailto:hello@shopday.io">hello@shopday.io</a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/shopdayio/"
                className="inline-flex items-center gap-1"
              >
                Instagram
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

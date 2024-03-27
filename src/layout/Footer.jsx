import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative mx-auto container">
      <h3 className="absolute top-10 left-10 text-white text-lg">shopday</h3>
      <div className="max-h-[300px] md:max-h-[500px] overflow-hidden">
        <img src="/images/footer.jpg" alt="shopday footer" />
      </div>
      <div className="bg-brand-BG p-10 flex gap-10">
        <div>
          <h4 className="font-bold mb-4">Contacts</h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:hello@shopday.io">hello@shopday.io</a>
            </li>
            <li>
              <a href="https://www.instagram.com/shopdayio/" className="">
                Instagram
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="">
                {t("disclaimer")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Developer</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Directory API</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

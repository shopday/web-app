import { useTranslation } from "react-i18next";

const HeroTop = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-8 pt-0 flex items-center flex-col flex-col-reverse md:flex-row">
      <div className="flex flex-col justify-between h-full gap-5">
        <h2 className="text-6xl text-white mt-10">{t("hero.passion")}</h2>

        <a
          href="https://forms.gle/EGRVHBLG3a7QEDic9"
          target="_blank"
          className="text-white text-lg"
        >
          {t("register")}
        </a>
      </div>

      <div className="w-full bg-white p-7 rounded-3xl">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./images/top-hero.jpg"
        />
      </div>
    </div>
  );
};

export default HeroTop;

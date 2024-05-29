import HeroTop from "../layout/homepage/HeroTop";
import LatestEnterprise from "../layout/homepage/LatestEnterprise";
import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";

const Maintenance = () => {
  const { t } = useTranslation();

  return (
      <>
          <Helmet>
              <meta charSet="utf-8"/>
              <title>{t("maintenance")}</title>
              <meta name="description" content={t("maintenance")}/>
          </Helmet>
          <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                  <div className="text-center lg:w-2/3 w-full">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                          {t("maintenance")}
                      </h1>
                      <p className="mb-8 leading-relaxed">I apologize for the inconvenience caused by the recent
                          maintenance work. We understand it disrupted your routine and regret any frustration it may have
                          caused. Thank you for your patience and understanding as we work to improve our services.
                      </p>
                  </div>
              </div>
          </section>
      </>
  );
};

export default Maintenance;

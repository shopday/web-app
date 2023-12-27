import HeroTop from "../layout/homepage/HeroTop";
import LatestEnterprise from "../layout/homepage/LatestEnterprise";
import { Helmet } from "react-helmet";

import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("site.title")}</title>
        <meta name="description" content={t("site.description")} />
      </Helmet>
      <HeroTop />
      <LatestEnterprise />
    </>
  );
};

export default Homepage;

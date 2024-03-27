import HeroTop from "../layout/homepage/HeroTop";
import LatestEnterprise from "../layout/homepage/LatestEnterprise";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import HeroLoggedIn from "../layout/homepage/HeroLoggedIn";

const Homepage = () => {
  const { t } = useTranslation();

  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.authentication.isAuthenticated,
  }));

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("site.title")}</title>
        <meta name="description" content={t("site.description")} />
      </Helmet>
      {isAuthenticated ? <HeroLoggedIn /> : <HeroTop />}
      <LatestEnterprise />
    </>
  );
};

export default Homepage;

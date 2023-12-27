import { useTranslation } from "react-i18next";
import Item from "./latest-enterprise/Item";

const LatestEnterprise = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-8 pt-0 flex items-center flex-col bg-brand-BG">
      <h2 className="text-4xl text-gray-800 my-10">
        {t("homepage.latest-enterprise")}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <Item companyName="Shopday" companyLink="/shopday" />
      </div>
    </div>
  );
};

export default LatestEnterprise;

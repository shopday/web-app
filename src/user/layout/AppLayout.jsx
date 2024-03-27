import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../service/companyService";
import { Box } from "grommet";
import { DataTable } from "grommet";
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";

const AppLayout = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <>
      <Helmet>
        <title>
          {t("user.dashboard")} | {t("site.title")}
        </title>
      </Helmet>
      <div className="mx-auto p-5">
        <div className="p-4 rounded-2xl gap-4 w-full flex">
          <AppSidebar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;

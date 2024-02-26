import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../service/companyService";
import { Box } from "grommet";
import { DataTable } from "grommet";
import { AppWidget } from "./AppWidget";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  const { data, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

  const companyCols = [
    { property: "id", header: "Id" },
    { property: "companyName", header: "Name" },
    { property: "companyPhone", header: "Phone" },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t("user.dashboard")} | {t("site.title")}
        </title>
      </Helmet>
      <div className="container mx-auto p-5">
        <div className="p-4 rounded-2xl gap-4 w-full">
          <AppWidget />
          <Outlet />
        </div>
      </div>
    </>
  );
};

const RightContent = ({ data: companies, columns }) => {
  return (
    <Box className="col-span-6">
      <DataTable data={companies} columns={columns} />
    </Box>
  );
};

export default UserDashboard;

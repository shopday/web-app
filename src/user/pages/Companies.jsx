import {
  PageHeader,
  Box,
  DataTable,
  Text,
  Button,
  FormField,
  TextInput,
} from "grommet";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../service/companyService";
import FormNew from "./company/FormNew";
import GlobalSpinner from "../../components/Spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Companies() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [triggerFetching, setTriggerFetching] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function refetchData() {
    setTriggerFetching(true);
  }

  const { data, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

  const companyCols = [
    { property: "id", header: "Id" },
    { property: "companyName", header: "Name" },
    { property: "companyPhone", header: "Phone" },
    { property: "provinceId", header: "Province" },
    { property: "companyIntro", header: "Intro" },
    { property: "active", header: "Active" },
  ];

  if (isLoading) return <GlobalSpinner />;

  return (
    <div className="flex">
      <div>
        <h2 className="text-2xl mb-4">Companies</h2>
        <Box className="col-span-6 mb-10">
          {data != null && data?.count > 0 ? (
            <DataTable
              data={data.data}
              columns={companyCols}
              background={{
                header: { color: "dark-1", opacity: "strong" },
                body: ["light-1", "light-3"],
                footer: { color: "dark-1", opacity: "strong" },
              }}
            />
          ) : (
            <Text color="status-warning">No data</Text>
          )}
        </Box>

        <Button primary label="Add new company" onClick={() => openModal()} />
        {modalIsOpen && (
          <FormNew modalIsOpen={modalIsOpen} closeModal={closeModal} />
        )}
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

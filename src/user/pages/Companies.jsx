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

export default function Companies() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
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
      <PageHeader title="Companies" level="1" />
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

      <Button primary label="New Item" onClick={() => openModal()} />
      {modalIsOpen && (
        <FormNew modalIsOpen={modalIsOpen} closeModal={closeModal} />
      )}
    </>
  );
}

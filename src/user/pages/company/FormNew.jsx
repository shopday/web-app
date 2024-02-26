import {
  PageHeader,
  Box,
  DataTable,
  Text,
  Button,
  FormField,
  TextInput,
  Select,
  TextArea,
  FileInput,
  Spinner,
} from "grommet";

import React, { useState } from "react";
import { Formik } from "formik";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import { useQuery } from "@tanstack/react-query";
import { getProvinces } from "../../../service/addressService";

export default function FormNew({ modalIsOpen, closeModal }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const { data, isLoading } = useQuery({
    queryKey: ["provinces"],
    queryFn: getProvinces,
  });

  const [provinceValue, setProvinceValue] = useState();

  if (isLoading) {
    return (
      <Box align="center">
        <Spinner
          border={[
            { side: "all", color: "background-contrast", size: "medium" },
            { side: "right", color: "brand", size: "medium" },
            { side: "top", color: "brand", size: "medium" },
            { side: "left", color: "brand", size: "medium" },
          ]}
        />
      </Box>
    );
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <PageHeader
        title="Create new item"
        level={3}
        margin="none"
        actions={<Button label="close" onClick={closeModal} />}
      />
      <Formik
        initialValues={{ company_name: "", phone: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.company_name) {
            errors.company_name = "required";
          }
          if (!values.phone) {
            errors.phone = "required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, handleSubmit, handleChange, values, setFieldValue }) => (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <FormField label="Company Name" error={errors.company_name}>
              <TextInput
                value={values.company_name || ""}
                name="company_name"
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Phone" error={errors.phone}>
              <TextInput
                value={values.phone || ""}
                name="phone"
                type="number"
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Province" error={errors.province}>
              <Select
                options={data?.data}
                value={provinceValue || ""}
                valueKey={{ key: "id", reduce: true }}
                labelKey="name"
                name="province"
                onChange={({ value: nextValue }) => {
                  const valueObject = data?.data.filter(
                    (item) => item.id == nextValue
                  );
                  setFieldValue("province", nextValue);
                  setProvinceValue(nextValue);
                }}
              />
            </FormField>
            <FormField label="District/County" error={errors.district}>
              <Select
                options={["small", "medium", "large"]}
                value={values.district || ""}
                name="district"
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Company Bio" error={errors.bio}>
              <TextArea
                value={values.bio || ""}
                name="bio"
                onChange={handleChange}
              />
            </FormField>
            <FileInput
              name="file"
              onChange={(event) => {
                const fileList = event.target.files;
                for (let i = 0; i < fileList.length; i += 1) {
                  const file = fileList[i];
                }
              }}
            />
            <Button primary label="Save" type="submit" />
          </form>
        )}
      </Formik>
    </ReactModal>
  );
}

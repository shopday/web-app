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
import { addressService } from "../../../service/addressService";
import { companyService } from "../../../service/companyService";
import GlobalSpinner from "../../../components/Spinner";

export default function FormNew({ modalIsOpen, closeModal, refetchData }) {
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

  const [provinceValue, setProvinceValue] = useState();
  const [districtValue, setDistrictValue] = useState();
  const [wardValue, setWardValue] = useState();

  const { data: provinces, isLoading } = useQuery({
    queryKey: ["provinces"],
    queryFn: addressService.getProvinces,
  });

  const { data: districts, isDistrictLoading } = useQuery({
    queryKey: ["districts", provinceValue],
    queryFn: () => addressService.getAllDistricts(provinceValue),
    enabled: !!provinceValue,
  });

  const { data: wards, isWardsLoading } = useQuery({
    queryKey: ["wards", districtValue],
    queryFn: () => addressService.getAllWards(districtValue),
    enabled: !!districtValue,
  });

  if (isLoading) {
    <GlobalSpinner />;
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
        initialValues={{ companyName: "", companyPhone: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.companyName) {
            errors.companyName = "required";
          }
          if (!values.companyPhone) {
            errors.companyPhone = "required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          companyService.createCompany(values).then((res) => {
            if (res.successful) {
              closeModal();
              refetchData();
            }
          });
        }}
      >
        {({ errors, handleSubmit, handleChange, values, setFieldValue }) => (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <FormField label="Company Name" error={errors.companyName}>
              <TextInput
                value={values.companyName || ""}
                name="companyName"
                onChange={handleChange}
              />
            </FormField>
            <FormField label="companyPhone" error={errors.companyPhone}>
              <TextInput
                value={values.companyPhone || ""}
                name="companyPhone"
                type="number"
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Province" error={errors.province}>
              <Select
                options={provinces ? provinces : []}
                value={provinceValue || ""}
                valueKey={{ key: "id", reduce: true }}
                labelKey="name"
                name="provinceId"
                onChange={({ value: nextValue }) => {
                  const valueObject = provinces.filter(
                    (item) => item.id == nextValue
                  );
                  setFieldValue("provinceId", nextValue);
                  setProvinceValue(nextValue);
                }}
              />
            </FormField>
            <FormField label="District/County" error={errors.district}>
              <Select
                options={districts ? districts : []}
                value={districtValue || ""}
                valueKey={{ key: "id", reduce: true }}
                labelKey="name"
                name="districtId"
                onChange={({ value: nextValue }) => {
                  setFieldValue("districtId", nextValue);
                  setDistrictValue(nextValue);
                }}
              />
            </FormField>
            <FormField label="Ward" error={errors.ward}>
              <Select
                options={wards ? wards : []}
                value={wardValue || ""}
                valueKey={{ key: "id", reduce: true }}
                labelKey="name"
                name="wardId"
                onChange={({ value: nextValue }) => {
                  setFieldValue("wardId", nextValue);
                  setWardValue(nextValue);
                }}
              />
            </FormField>
            <FormField label="Company Bio" error={errors.companyIntro}>
              <TextArea
                value={values.companyIntro || ""}
                name="companyIntro"
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

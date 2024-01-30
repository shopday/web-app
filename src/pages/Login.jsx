import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { FormField, TextInput, Form, Box, Button } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../lib/reducer/authenticationSlice";

import { Formik } from "formik";

const IAM_API_URL = import.meta.env.VITE_IAM_API_URL;
const API_PATH = import.meta.env.VITE_API_V1_PATH;
const LOGIN_URL = import.meta.env.VITE_IAM_API_LOGIN;

import { Hide, View } from "grommet-icons";

import AxiosInstance from "../lib/axios.js";

import { toast } from "react-toastify";

const Login = () => {
  const { t } = useTranslation();

  const [reveal, setReveal] = useState(false);

  const dispath = useDispatch();

  const axios = new AxiosInstance(IAM_API_URL);

  const loginSubmit = async (values) => {
    axios
      .post(API_PATH + LOGIN_URL, values)
      .then((res) => {
        if (!res.successful) {
          // toast(res.message + " " + res.exception);
          toast.error(res.exception);
          return;
        }
        const token = res?.data?.token;
        if (token != null) {
          dispath(login(token));
        }
      })
      .catch((error) => {
        console.log("Cannot login", error);
      });
  };

  // const { isAuthenticated, token } = useSelector((state) => ({
  //   isAuthenticated: state.authentication.isAuthenticated,
  //   token: state.authentication.token,
  // }));

  useEffect(() => {}, []);

  return (
    <>
      <Helmet>
        <title>
          {t("login")} | {t("site.title")}
        </title>
      </Helmet>
      <div className="prose container mx-auto p-5">
        <h1 className="">{t("login")}</h1>
        <div className="bg-white p-4 rounded-2xl">
          <Box align="center" justify="center" pad="large">
            <Box width="medium" gap="medium">
              <Formik
                initialValues={{ username: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.username) {
                    errors.username = "required";
                  }
                  if (!values.password) {
                    errors.password = "required";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  loginSubmit(values);
                }}
              >
                {({ errors, handleSubmit, handleChange, values }) => (
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <Box gap="medium">
                      <FormField
                        label={t("register-page.person.email")}
                        error={errors.username}
                      >
                        <TextInput
                          value={values.username || ""}
                          name="username"
                          onChange={handleChange}
                        />
                      </FormField>
                      <Box direction="row" align="center">
                        <FormField error={errors.password}>
                          <TextInput
                            placeholder={t("register-page.person.password")}
                            name="password"
                            type={reveal ? "text" : "password"}
                            value={values.password || ""}
                            onChange={handleChange}
                            aria-label="Input Password"
                            plain
                          />
                        </FormField>
                        <Button
                          icon={
                            reveal ? (
                              <View size="medium" />
                            ) : (
                              <Hide size="medium" />
                            )
                          }
                          onClick={() => setReveal(!reveal)}
                        />
                      </Box>
                      <Button primary label={t("login")} type="submit" />
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Login;

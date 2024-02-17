import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { FormField, TextInput, Form, Box, Button } from "grommet";
import { useSelector, useDispatch } from "react-redux";
const IAM_API_URL = import.meta.env.VITE_IAM_API_URL;
import { useNavigate } from "react-router-dom";
import { Hide, View } from "grommet-icons";

import AxiosInstance from "../lib/axios.js";

const Register = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [reveal, setReveal] = useState(false);

  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const register = async () => {
    const axios = new AxiosInstance(IAM_API_URL);
    const test = await axios.post("/company");
  };

  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.authentication.isAuthenticated,
  }));

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Helmet>
        <title>
          {t("register")} | {t("site.title")}
        </title>
      </Helmet>
      <div className="prose container mx-auto p-5">
        <h1 className="">{t("register")}</h1>
        <div className="bg-white p-4 rounded-2xl">
          <Box align="center" justify="center" pad="large">
            <Box width="medium" gap="medium">
              <TextInput
                placeholder={t("register-page.person.name")}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextInput placeholder={t("register-page.person.email")} />
              <Box
                width="medium"
                direction="row"
                align="center"
                round="small"
                border
              >
                <TextInput
                  placeholder={t("register-page.person.password")}
                  type={reveal ? "text" : "password"}
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  aria-label="Input Password"
                  plain
                />
                <Button
                  icon={
                    reveal ? <View size="medium" /> : <Hide size="medium" />
                  }
                  onClick={() => setReveal(!reveal)}
                />
              </Box>
              <Button primary label={t("register")} />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Register;

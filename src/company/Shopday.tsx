import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Popover } from "@headlessui/react";

import { usePopper } from "react-popper";

import {
  CheckBadgeIcon,
  PhoneIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function Shopday() {
  const { t } = useTranslation();

  const [verifyBtn, setVerifyBtn] = useState();
  const [verifyPopup, setVerifyPopup] = useState();

  return (
    <>
      <Helmet>
        <title>Shopday | {t("site.title")}</title>
      </Helmet>
      <div className=" max-w-6xl mx-auto flex flex-col gap-5 p-6">
        <div>
          <img
            src="https://media-public.canva.com/MADQ5FB0hZs/1/screen.jpg"
            alt=""
            className="rounded-2xl w-full"
          />
        </div>
        <div className="bg-white rounded-2xl p-10 flex justify-between items-start gap-5">
          <div>
            <h2 className="text-brand font-bold mb-10 text-xl flex items-center gap-2">
              <div>shopday</div>
              <Popover className="relative flex">
                <Popover.Button ref={setVerifyBtn}>
                  <CheckBadgeIcon className="text-blue-400 w-6" />
                </Popover.Button>
                <Popover.Panel
                  ref={setVerifyPopup}
                  className="border-2 rounded-xl border-green-400 p-4 bg-white max-w-[300px]"
                >
                  <p className="prose font-normal flex items-start">
                    Verify based on phone, email and website.
                    <a href="/disclaimer">
                      <QuestionMarkCircleIcon className="text-green-500 w-6" />
                    </a>
                  </p>
                </Popover.Panel>
              </Popover>
            </h2>
            <div className="prose">
              <p>{t("company.shopday.bio")}</p>
              <p>
                <b>{t("solution")}:</b> {t("company.shopday.solution")}
              </p>
            </div>
          </div>
          <div>
            <img
              src="./images/company/shopday_url_qr_code.svg"
              alt=""
              width={150}
            />
          </div>
        </div>{" "}
      </div>

      <div className="flex p-10 max-w-6xl mx-auto justify-evenly">
        <a href="tel:0911510641" className="text-black">
          <PhoneIcon className="w-11" />
        </a>

        <a href="mailto:hello@shopday.io" className="text-black">
          <EnvelopeIcon className="w-11" />
        </a>
        {/* <a href="mailto:hello@shopday.io" className="text-black"> */}
        {/* <ChatBubbleOvalLeftIcon className="w-11" /> */}
        {/* </a> */}
        <a href="https://shopday.io" target="_blank" className="text-black">
          <GlobeAltIcon className="w-11" />
        </a>
      </div>
    </>
  );
}

export default Shopday;

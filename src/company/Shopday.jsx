import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useTranslation } from "react-i18next";

import { Popover } from "@headlessui/react";

import {
  CheckBadgeIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

function Shopday() {
  const { t } = useTranslation();
  return (
    <main className="bg-brand">
      <Header />

      <div className="flex flex-col gap-5 p-6">
        <div>
          <img
            src="https://media-public.canva.com/MADQ5FB0hZs/1/screen.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="bg-white rounded-2xl p-10 flex justify-between items-start gap-5">
          <div>
            <h2 className="text-brand font-bold mb-10 text-xl flex items-center gap-2">
              <div>shopday</div>
              <Popover className="relative flex">
                <Popover.Button>
                  <CheckBadgeIcon className="text-blue-400 w-6" />
                </Popover.Button>
                <Popover.Panel className="absolute left-7 border-2 rounded-xl border-green-400 p-4 bg-white w-[300px]">
                  <p className="prose font-normal">
                    Verify based on phone, email and website.
                  </p>
                </Popover.Panel>
              </Popover>
            </h2>
            <div className="prose">
              <p>{t("company.shopday.bio")}</p>
              <p>
                <b>Giải pháp:</b> Quảng cáo, bán sản phẩm.
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

      <div className="flex p-10 w-full justify-evenly">
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

      <Footer />
    </main>
  );
}

export default Shopday;
